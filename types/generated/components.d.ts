import type { Struct, Schema } from '@strapi/strapi';

export interface SharedVideoEmbed extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_embeds';
  info: {
    displayName: 'Video Embed';
    icon: 'stack';
    description: '';
  };
  attributes: {
    internalFile: Schema.Attribute.Media<'videos'>;
    type: Schema.Attribute.Enumeration<['internal', 'external']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'external'>;
    externalUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    keywords: Schema.Attribute.String;
    canonicalUrl: Schema.Attribute.String;
    index: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    follow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    image: Schema.Attribute.Media<'images'>;
    twitterCard: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'stack';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface SharedPageLayout extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_layouts';
  info: {
    displayName: 'PageLayout';
    icon: 'stack';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<['default', 'fullWidth', 'noSidebar']> &
      Schema.Attribute.Required;
  };
}

export interface SharedMeta extends Struct.ComponentSchema {
  collectionName: 'components_shared_metas';
  info: {
    displayName: 'Meta';
    icon: 'stack';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'stack';
    description: '';
  };
  attributes: {
    file: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials_sections';
  info: {
    displayName: 'TestimonialsSection';
    icon: 'stack';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.testimonial-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSliderGallery extends Struct.ComponentSchema {
  collectionName: 'components_sections_slider_galleries';
  info: {
    displayName: 'SliderGallery';
    icon: 'stack';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServicesGallerySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_gallery_sections';
  info: {
    displayName: 'ServicesGallerySection';
    icon: 'stack';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.service-gallery-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface SectionsImageComparisonShowcaseSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_comparison_showcase_sections';
  info: {
    displayName: 'ImageComparisonShowcaseSection';
    icon: 'stack';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.image-comparison', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'stack';
  };
  attributes: {
    heading: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    badge: Schema.Attribute.Media<'images'>;
    highlightedButton: Schema.Attribute.Component<'elements.button', false>;
    action: Schema.Attribute.Component<'elements.button', false>;
    subtext: Schema.Attribute.String;
  };
}

export interface SectionsFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_features_sections';
  info: {
    displayName: 'FeaturesSection';
    icon: 'stack';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    caption: Schema.Attribute.String;
    action: Schema.Attribute.Component<'elements.button', false>;
    subtext: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<'elements.feature-item', true>;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'FaqSection';
    icon: 'stack';
    description: '';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'elements.faq-item', true>;
    title: Schema.Attribute.String;
    caption: Schema.Attribute.String;
  };
}

export interface SectionsCounterSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_counter_sections';
  info: {
    displayName: 'CounterSection';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    items: Schema.Attribute.Component<'elements.counter-item', true>;
  };
}

export interface SectionsCommentsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_comments_sections';
  info: {
    displayName: 'CommentsSection';
    icon: 'stack';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    items: Schema.Attribute.Component<'elements.comment-item', true>;
  };
}

export interface SectionsBlogsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_blogs_sections';
  info: {
    displayName: 'BlogsSection';
    icon: 'stack';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    title: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
    newTab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'stack';
    description: '';
  };
  attributes: {
    logo: Schema.Attribute.Component<'layout.logo', false>;
    buttons: Schema.Attribute.Component<'elements.button', true>;
  };
}

export interface LayoutLogo extends Struct.ComponentSchema {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    icon: 'stack';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'stack';
    description: '';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images', true>;
    copyRightText: Schema.Attribute.Text;
    pages: Schema.Attribute.Component<'links.link', true>;
    instagramLink: Schema.Attribute.Component<'links.link', false>;
    facebookLink: Schema.Attribute.Component<'links.link', false>;
    linkedinLink: Schema.Attribute.Component<'links.link', false>;
    email: Schema.Attribute.Component<'links.link', false>;
    buttons: Schema.Attribute.Component<'elements.button', true>;
    line1: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    line2: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface ElementsTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonial_items';
  info: {
    displayName: 'TestimonialItem';
    icon: 'stack';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ElementsServiceGalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_gallery_items';
  info: {
    displayName: 'ServiceGalleryItem';
    icon: 'stack';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface ElementsImageComparison extends Struct.ComponentSchema {
  collectionName: 'components_elements_image_comparisons';
  info: {
    displayName: 'ImageComparison';
    icon: 'stack';
    description: '';
  };
  attributes: {
    before: Schema.Attribute.Media<'images'>;
    after: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_items';
  info: {
    displayName: 'FeatureItem';
    icon: 'stack';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
  };
}

export interface ElementsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_items';
  info: {
    displayName: 'FaqItem';
    icon: 'stack';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsCounterItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_counter_items';
  info: {
    displayName: 'CounterItem';
    icon: 'stack';
  };
  attributes: {
    value: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ElementsCommentItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_comment_items';
  info: {
    displayName: 'CommentItem';
    icon: 'stack';
  };
  attributes: {
    authorAvatar: Schema.Attribute.Media<'images'>;
    authorName: Schema.Attribute.String;
    authorUsername: Schema.Attribute.String;
    comment: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    icon: 'stack';
    description: '';
  };
  attributes: {
    variant: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'primary'>;
    title: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<['sm', 'md', 'lg']>;
    url: Schema.Attribute.String;
    newTab: Schema.Attribute.Boolean;
    actionType: Schema.Attribute.Enumeration<['url', 'custom_function']>;
    cutomFunctionHandlerName: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.video-embed': SharedVideoEmbed;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.page-layout': SharedPageLayout;
      'shared.meta': SharedMeta;
      'shared.media': SharedMedia;
      'sections.testimonials-section': SectionsTestimonialsSection;
      'sections.slider-gallery': SectionsSliderGallery;
      'sections.services-gallery-section': SectionsServicesGallerySection;
      'sections.image-comparison-showcase-section': SectionsImageComparisonShowcaseSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.features-section': SectionsFeaturesSection;
      'sections.faq-section': SectionsFaqSection;
      'sections.counter-section': SectionsCounterSection;
      'sections.comments-section': SectionsCommentsSection;
      'sections.blogs-section': SectionsBlogsSection;
      'links.link': LinksLink;
      'layout.navbar': LayoutNavbar;
      'layout.logo': LayoutLogo;
      'layout.footer': LayoutFooter;
      'elements.testimonial-item': ElementsTestimonialItem;
      'elements.service-gallery-item': ElementsServiceGalleryItem;
      'elements.image-comparison': ElementsImageComparison;
      'elements.feature-item': ElementsFeatureItem;
      'elements.faq-item': ElementsFaqItem;
      'elements.counter-item': ElementsCounterItem;
      'elements.comment-item': ElementsCommentItem;
      'elements.button': ElementsButton;
    }
  }
}
