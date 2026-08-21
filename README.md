# murat.bio

Bu statik site, tekrar eden HTML parçaları ve sayfa metadatası için Nginx SSI kullanır.

Her sayfanın başındaki `page_title`, `page_description`, `page_id` (gerekirse `page_robots`) değişkenlerini düzenleyin. Ortak `<head>`, üstbilgi, sosyal bağlantılar ve altbilgi `includes/` altında bulunur.

Yerelde çalıştırmak için:

```sh
docker compose up
```

Siteyi [http://localhost:8080](http://localhost:8080) adresinde açın. Kaynak dosyalar proje kök dizininden salt okunur olarak bağlandığı için değişiklikler yeniden imaj oluşturmadan görünür. Durdurmak için `docker compose down` kullanın.
