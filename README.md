# Dijital Düğün Davetiyesi

Bu proje GitHub Pages üzerinde ücretsiz yayımlanabilen, mobil uyumlu tek sayfalık bir dijital düğün davetiyesidir.

## Dosyalar

- `index.html` — Sayfanın ana içeriği
- `style.css` — Tasarım ve mobil uyumluluk
- `script.js` — Geri sayım ve animasyonlar
- `images/` — Fotoğraflar

## 1. İsim ve metinleri değiştirme

`index.html` dosyasını açın ve aşağıdaki alanları kendi bilgilerinizle değiştirin:

- Emre & Sümeyra
- 20 Aralık 2026
- Saat 19.00
- Salon Adı
- Açık adres
- Davet metni

## 2. Düğün tarihini değiştirme

`script.js` içindeki şu satırı değiştirin:

```js
const weddingDate = new Date("2026-12-20T19:00:00+03:00");
```

Türkiye saati için `+03:00` kısmını koruyabilirsiniz.

## 3. Fotoğraf ekleme

`images` klasörüne şu adlarla fotoğraf koyun:

- `kapak.jpg`
- `foto1.jpg`
- `foto2.jpg`
- `foto3.jpg`

Kapak fotoğrafı mümkünse yatay ve yüksek çözünürlüklü olsun.

## 4. Google Maps bağlantısı

`index.html` içinde şu bağlantıyı bulun:

```html
href="https://maps.google.com/"
```

Bunu düğün salonunun Google Maps paylaşım bağlantısıyla değiştirin.

## 5. RSVP / Katılım formu

Google Forms üzerinden bir form oluşturun.

Önerilen sorular:

- Ad Soyad
- Katılım durumu
- Katılacak kişi sayısı
- Not

Formun paylaşım bağlantısını kopyalayın ve `index.html` içindeki:

```html
href="https://forms.google.com/"
```

alanıyla değiştirin.

## 6. GitHub Pages ile yayımlama

1. GitHub'da yeni bir repository oluşturun.
2. Bu klasördeki tüm dosyaları repository'ye yükleyin.
3. `Settings` → `Pages` bölümüne gidin.
4. `Build and deployment` altında `Deploy from a branch` seçin.
5. Branch olarak `main`, klasör olarak `/root` seçin.
6. `Save` düğmesine basın.

Bir süre sonra GitHub Pages bağlantınız hazır olacaktır.

Örnek:

`https://kullaniciadi.github.io/dugun-davetiye/`

## Özel alan adı

Daha sonra kendi domain'inizi de GitHub Pages'e bağlayabilirsiniz.

Örneğin:

`emrevesumeyra.com`
