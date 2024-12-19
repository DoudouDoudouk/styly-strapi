import {
  useQueryParams,
  unstable_useDocument as useDocument,
  unstable_useDocumentActions as useDocumentActions,
  useForm,
  useFetchClient,
} from "@strapi/strapi/admin";
import {
  Flex,
  Typography,
  Button,
  Field,
  SingleSelect,
  SingleSelectOption,
  Dialog,
} from "@strapi/design-system";
import { cleanData } from "../utils/clean";
import React, { useEffect, useState } from "react";
import { translateData } from "../utils/translateData";
import { AILoadingIcon } from "./LoadingIcon";
import { AIIcon } from "./icons";

export const FillAndTranslateLocaleAction = ({
  documentId,
  meta,
  model,
  collectionType,
}: any) => {
  const [{ query }] = useQueryParams();

  const client = useFetchClient();
  const [locales, setLocales] = useState<{ code: string; name: string }[]>([]);

  const currentDesiredLocale = query.plugins?.i18n?.locale;
  const [localeSelected, setLocaleSelected] = React.useState<string | null>(
    null
  );
  const setValues = useForm(
    "FillFromAnotherLocale",
    (state) => state.setValues
  );

  const [isLoading, setIsLoading] = useState(false);

  const { getDocument } = useDocumentActions();
  const { schema, components } = useDocument({
    model,
    documentId,
    collectionType,
    params: { locale: currentDesiredLocale },
  });

  useEffect(() => {
    client.get("/i18n/locales").then((response) => setLocales(response.data));
  }, []);

  const availableLocales = Array.isArray(locales)
    ? locales.filter((locale) =>
        meta?.availableLocales.some((l) => l.locale === locale.code)
      )
    : [];

  const fillFromLocale = (onClose: () => void) => async () => {
    setIsLoading(true);
    const response = await getDocument({
      collectionType,
      model,
      documentId,
      params: { locale: localeSelected },
    });
    if (!response || !schema) {
      return;
    }

    const { data } = response;

    const cleanedData = cleanData(data, schema, components);

    try {
      const translatedData = await translateData(
        cleanedData,
        localeSelected as string,
        currentDesiredLocale
      );
      setValues(translatedData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return {
    type: "icon",
    icon: <AIIcon size={16} />,
    disabled: availableLocales.length === 0,
    label: "AI Translate",
    dialog: {
      type: "dialog",
      title: isLoading ? "AI GENERATING..." : "Confirmation",
      content: ({ onClose }: { onClose: () => void }) => (
        <>
          {isLoading ? (
            <Dialog.Body>
              <AILoadingIcon size={64} />
            </Dialog.Body>
          ) : (
            <>
              <Dialog.Body>
                <Flex direction="column" gap={3}>
                  <Typography textAlign="center">
                    Your current content will be erased and filled by the
                    content of translate result
                  </Typography>
                  <Field.Root width="100%">
                    <Field.Label>Locale</Field.Label>
                    <SingleSelect
                      value={localeSelected}
                      placeholder={"Select one locale..."}
                      // @ts-expect-error – the DS will handle numbers, but we're not allowing the API.
                      onChange={(value) => setLocaleSelected(value)}
                    >
                      {availableLocales.map((locale) => (
                        <SingleSelectOption
                          key={locale.code}
                          value={locale.code}
                        >
                          {locale.name}
                        </SingleSelectOption>
                      ))}
                    </SingleSelect>
                  </Field.Root>
                </Flex>
              </Dialog.Body>
              <Dialog.Footer>
                <Flex gap={2} width="100%">
                  <Button
                    disabled={isLoading}
                    flex="auto"
                    variant="tertiary"
                    onClick={onClose}
                  >
                    No, cancel
                  </Button>
                  <Button
                    flex="auto"
                    variant="success"
                    onClick={fillFromLocale(onClose)}
                    disabled={isLoading}
                  >
                    Yes, fill in
                  </Button>
                </Flex>
              </Dialog.Footer>
            </>
          )}
        </>
      ),
    },
  };
};
