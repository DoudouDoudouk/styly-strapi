# 1. Strapi için Node.js tabanlı bir resmi imaj kullanarak başlıyoruz
FROM node:18-alpine

# 2. Çalışma dizinini oluştur
WORKDIR /usr/src/app

# 3. Strapi'yi çalıştırmak için gerekli bağımlılıkları yükleyelim
COPY package.json ./
COPY yarn.lock ./

# 4. Bağımlılıkları kur
RUN yarn install

# 5. Tüm proje dosyalarını konteynıra kopyala
COPY . .

# 6. Yapılandırma dosyalarının izinlerini ayarla
RUN chmod -R 777 /usr/src/app

# 7. Strapi yapılandırmasını derleyelim (yapı işlemi)
RUN yarn build

# 8. Uygulamayı başlat
CMD ["yarn", "start"]

# 9. Strapi'nin çalışacağı portu belirle
EXPOSE 1337
