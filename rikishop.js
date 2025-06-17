        // --- Konfigurasi ---
        const WA_ADMIN_NUMBER = "6285771555374"; // Ganti dengan nomor WhatsApp admin Anda!
        const WA_SELLER_NUMBER = "6285771555374"; // Ganti dengan nomor WhatsApp seller Anda! (Bisa sama dengan admin)
        const CREATOR_USERNAME = "Riki Shop Real"; // Digunakan dalam menu bot, simulasikan config.creator

        // --- Elemen DOM ---
        const welcomeScreen = document.getElementById('welcomeScreen'); // Welcome screen
        const mainContainer = document.getElementById('mainContainer'); // Main content container

        const offcanvasMenu = document.getElementById('offcanvasMenu');
        const overlay = document.getElementById('overlay');
        const openMenuBtn = document.getElementById('openMenu');
        const closeMenuBtn = document.getElementById('closeMenu'); // Fixed typo
        const openCartBtn = document.getElementById('openCart');
        const cartCountSpan = document.getElementById('cartCount');
        const currentDateTimeSpan = document.getElementById('currentDateTime');
        const serviceItems = document.querySelectorAll('.service-item'); // All service items

        const serviceDetailPage = document.getElementById('service-detail-page');
        const homePage = document.getElementById('home-page');
        const cartPage = document.getElementById('cart-page');
        const chatAiPage = document.getElementById('chat-ai-page');

        const productListDiv = document.getElementById('productList');
        const productDetailViewDiv = document.getElementById('productDetailView');
        const serviceDetailPageTitle = document.getElementById('serviceDetailPageTitle');

        const detailProductName = document.getElementById('detailProductName');
        const detailProductDescriptionContent = document.getElementById('detailProductDescriptionContent'); // New container for description
        const detailProductPriceContainer = document.getElementById('detailProductPriceContainer'); // Container for price
        const detailProductPrice = document.getElementById('detailProductPrice');
        const detailProductActions = document.getElementById('detailProductActions'); // Container for buttons

        const cartItemsList = document.getElementById('cartItems');
        const cartTotalSpan = document.getElementById('cartTotal');
        const checkoutButton = document.getElementById('checkoutButton');
        const backArrows = document.querySelectorAll('.back-arrow');

        // Elemen Chat AI (untuk halaman)
        const chatAiMessagesPage = document.getElementById('chatAiMessagesPage');
        const chatAiInputPage = document.getElementById('chatAiInputPage');
        const sendChatAiBtnPage = document.getElementById('sendChatAiBtnPage');
        const chatAiLoadingPage = document.getElementById('chatAiLoadingPage');

        // Elemen Carousel Banner
        const bannerCarousel = document.getElementById('bannerCarousel');
        const bannerPagination = document.getElementById('bannerPagination');
        const bannerDots = document.querySelectorAll('.banner-dot');
        let currentBannerIndex = 0;
        let bannerInterval;

        // Elemen Modal Tentang Kami
        const aboutUsModal = document.getElementById('aboutUsModal');
        const openAboutUsModalBtn = document.getElementById('openAboutUsModal');
        const closeAboutUsModalBtn = document.getElementById('closeAboutUsModal');
        
        // Elemen Modal Generik Menu Script
        const genericScriptMenuModal = document.getElementById('genericScriptMenuModal');
        const genericScriptMenuTitle = document.getElementById('genericScriptMenuTitle');
        const genericScriptMenuContent = document.getElementById('genericScriptMenuContent');
        const closeGenericScriptMenuModalBtn = document.getElementById('closeGenericScriptMenuModal');
        
        // Data Produk
        const products = {
            "Panel": [
                { id: 1, nama: 'Panel Ram 1GB', harga: 3000, deskripsiPanjang: `Syarat & Ketentuan : Server private & kualitas terbaik! || Script bot dijamin aman (anti drama/maling) | masa aktif panel 30 hari || Garansi 15 hari (1x replace) || Server anti delay/lemot! || Claim garansi wajib bawa bukti transaksi dan data panel yang lengkap` },
                { id: 2, nama: 'Panel Ram 2GB', harga: 4000, deskripsiPanjang: `Syarat & Ketentuan : Server private & kualitas terbaik! || Script bot dijamin aman (anti drama/maling) | masa aktif panel 30 hari || Garansi 15 hari (1x replace) || Server anti delay/lemot! || Claim garansi wajib bawa bukti transaksi dan data panel yang lengkap` },
                { id: 3, nama: 'Panel Ram 3GB', harga: 5000, deskripsiPanjang: `Syarat & Ketentuan : Server private & kualitas terbaik! || Script bot dijamin aman (anti drama/maling) | masa aktif panel 30 hari || Garansi 15 hari (1x replace) || Server anti delay/lemot! || Claim garansi wajib bawa bukti transaksi dan data panel yang lengkap` },
                { id: 4, nama: 'Panel Ram 4GB', harga: 6000, deskripsiPanjang: `Syarat & Ketentuan : Server private & kualitas terbaik! || Script bot dijamin aman (anti drama/maling) | masa aktif panel 30 hari || Garansi 15 hari (1x replace) || Server anti delay/lemot! || Claim garansi wajib bawa bukti transaksi dan data panel yang lengkap` },
                { id: 5, nama: 'Panel Ram 5GB', harga: 7000, deskripsiPanjang: `Syarat & Ketentuan : Server private & kualitas terbaik! || Script bot dijamin aman (anti drama/maling) | masa aktif panel 30 hari || Garansi 15 hari (1x replace) || Server anti delay/lemot! || Claim garansi wajib bawa bukti transaksi dan data panel yang lengkap` },
                { id: 6, nama: 'Panel Ram 6GB', harga: 8000, deskripsiPanjang: `Syarat & Ketentuan : Server private & kualitas terbaik! || Script bot dijamin aman (anti drama/maling) | masa aktif panel 30 hari || Garansi 15 hari (1x replace) || Server anti delay/lemot! || Claim garansi wajib bawa bukti transaksi dan data panel yang lengkap` },
                { id: 7, nama: 'Panel Ram 7GB', harga: 9000, deskripsiPanjang: `Syarat & Ketentuan : Server private & kualitas terbaik! || Script bot dijamin aman (anti drama/maling) | masa aktif panel 30 hari || Garansi 15 hari (1x replace) || Server anti delay/lemot! || Claim garansi wajib bawa bukti transaksi dan data panel yang lengkap` },
                { id: 8, nama: 'Panel Ram 8GB', harga: 10000, deskripsiPanjang: `Syarat & Ketentuan : Server private & kualitas terbaik! || Script bot dijamin aman (anti drama/maling) | masa aktif panel 30 hari || Garansi 15 hari (1x replace) || Server anti delay/lemot! || Claim garansi wajib bawa bukti transaksi dan data panel yang lengkap` },
                { id: 9, nama: 'Panel Ram 9GB', harga: 11000, deskripsiPanjang: `Syarat & Ketentuan : Server private & kualitas terbaik! || Script bot dijamin aman (anti drama/maling) | masa aktif panel 30 hari || Garansi 15 hari (1x replace) || Server anti delay/lemot! || Claim garansi wajib bawa bukti transaksi dan data panel yang lengkap` },
                { id: 10, nama: 'Panel Ram 10GB', harga: 12000, deskripsiPanjang: `Syarat & Ketentuan : Server private & kualitas terbaik! || Script bot dijamin aman (anti drama/maling) | masa aktif panel 30 hari || Garansi 15 hari (1x replace) || Server anti delay/lemot! || Claim garansi wajib bawa bukti transaksi dan data panel yang lengkap` },
                { id: 11, nama: 'Panel Ram 11GB', harga: 13000, deskripsiPanjang: `Syarat & Ketentuan : Server private & kualitas terbaik! || Script bot dijamin aman (anti drama/maling) | masa aktif panel 30 hari || Garansi 15 hari (1x replace) || Server anti delay/lemot! || Claim garansi wajib bawa bukti transaksi dan data panel yang lengkap` },
                { id: 12, nama: 'Panel Ram UNLIMITED', harga: 15000, deskripsiPanjang: `Syarat & Ketentuan : Server private & kualitas terbaik! || Script bot dijamin aman (anti drama/maling) | masa aktif panel 30 hari || Garansi 15 hari (1x replace) || Server anti delay/lemot! || Claim garansi wajib bawa bukti transaksi dan data panel yang lengkap` },
            ],
            
            "VPS": [
                { id: 13, nama: 'VPS Ram:1GB Cpu:1', harga: 20000, deskripsiPanjang: 'Bonus Buy Vps: Free Install Panel 1x ram 8/16 || Free Instal Wings/Node 1x ram 8/16 || Free Pasang Egg Bot/Mc || Free Install Thema Buy Ram 8/16 || Garansi 15 Hari Nego? = Nogar || Vps On 30 Hari || Garansi Hanya 1x Ambil' },
                { id: 14, nama: 'VPS Ram:2GB Cpu:1', harga: 25000, deskripsiPanjang: 'Bonus Buy Vps: Free Install Panel 1x ram 8/16 || Free Instal Wings/Node 1x ram 8/16 || Free Pasang Egg Bot/Mc || Free Install Thema Buy Ram 8/16 || Garansi 15 Hari Nego? = Nogar || Vps On 30 Hari || Garansi Hanya 1x Ambil' },
                { id: 15, nama: 'VPS Ram:2GB Cpu:2', harga: 30000, deskripsiPanjang: 'Bonus Buy Vps: Free Install Panel 1x ram 8/16 || Free Instal Wings/Node 1x ram 8/16 || Free Pasang Egg Bot/Mc || Free Install Thema Buy Ram 8/16 || Garansi 15 Hari Nego? = Nogar || Vps On 30 Hari || Garansi Hanya 1x Ambil' },
                { id: 16, nama: 'VPS Ram:4GB Cpu:2', harga: 40000, deskripsiPanjang: 'Bonus Buy Vps: Free Install Panel 1x ram 8/16 || Free Instal Wings/Node 1x ram 8/16 || Free Pasang Egg Bot/Mc || Free Install Thema Buy Ram 8/16 || Garansi 15 Hari Nego? = Nogar || Vps On 30 Hari || Garansi Hanya 1x Ambil' },
                { id: 17, nama: 'VPS Ram:8GB Cpu:4', harga: 50000, deskripsiPanjang: 'Bonus Buy Vps: Free Install Panel 1x ram 8/16 || Free Instal Wings/Node 1x ram 8/16 || Free Pasang Egg Bot/Mc || Free Install Thema Buy Ram 8/16 || Garansi 15 Hari Nego? = Nogar || Vps On 30 Hari || Garansi Hanya 1x Ambil' },
                { id: 18, nama: 'VPS Ram:16GB Cpu:4', harga: 70000, deskripsiPanjang: 'Bonus Buy Vps: Free Install Panel 1x ram 8/16 || Free Instal Wings/Node 1x ram 8/16 || Free Pasang Egg Bot/Mc || Free Install Thema Buy Ram 8/16 || Garansi 15 Hari Nego? = Nogar || Vps On 30 Hari || Garansi Hanya 1x Ambil' },
                { id: 19, nama: 'VPS Ram:16GB Cpu:8', harga: 80000, deskripsiPanjang: 'Bonus Buy Vps: Free Install Panel 1x ram 8/16 || Free Instal Wings/Node 1x ram 8/16 || Free Pasang Egg Bot/Mc || Free Install Thema Buy Ram 8/16 || Garansi 15 Hari Nego? = Nogar || Vps On 30 Hari || Garansi Hanya 1x Ambil' },
                { id: 20, nama: 'VPS Ram:32GB Cpu:8', harga: 90000, deskripsiPanjang: 'Bonus Buy Vps: Free Install Panel 1x ram 8/16 || Free Instal Wings/Node 1x ram 8/16 || Free Pasang Egg Bot/Mc || Free Install Thema Buy Ram 8/16 || Garansi 15 Hari Nego? = Nogar || Vps On 30 Hari || Garansi Hanya 1x Ambil' },
                { id: 21, nama: 'Digital Ocean 10drop PayPal', harga: 190000, deskripsiPanjang: 'Layanan Digital Ocean dengan 10 akun drop siap pakai melalui PayPal. Ideal untuk pengembangan skala besar.' },
                { id: 22, nama: 'Digital Ocean 3drop PayPal', harga: 135000, deskripsiPanjang: 'Layanan Digital Ocean dengan 3 akun drop siap pakai melalui PayPal. Cocok untuk kebutuhan menengah.' },
                { id: 23, nama: 'Digital Ocean 3drop VCC', harga: 120000, deskripsiPanjang: 'Layanan Digital Ocean dengan 3 akun drop siap pakai menggunakan Virtual Credit Card (VCC).' },
                { id: 24, nama: 'Digital Ocean 10drop VCC', harga: 150000, deskripsiPanjang: 'Layanan Digital Ocean dengan 10 akun drop siap pakai menggunakan Virtual Credit Card (VCC).' },
            ],
            // Script akan memiliki satu item khusus untuk membuka menu bot
            "Script": [
                 { id: 25, nama: 'Script push no button', harga: 15000, deskripsiPanjang: 'cocok untuk open bot push, dan cocok juga untuk pushkontak.',
                   menuContent: `Menu Fitur Script push no button:\n
Hai Kak _
_

┅═❏ *WELCOME TO SC RIKI SHOP* ❏═┅‎‎
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
 ═ 𝐘𝐓 : 𝐑𝐈𝐊𝐈 𝐒𝐇𝐎𝐏 ═

 友 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : _
 友 𝐍𝐮𝐦𝐛𝐞𝐫 : _
 友 𝐍𝐚𝐦𝐚 𝐒𝐜𝐫𝐢𝐩𝐭 : *push-rikibtz*
 友 𝐕𝐞𝐫𝐬𝐢 𝐒𝐜𝐫𝐢𝐩𝐭 : *1.0*
 友 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐚𝐢𝐥𝐞𝐲𝐬 : *6.7.7*
 友 𝐇𝐚𝐫𝐢 : _
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
╭─「 *menu bot riki shop* 」 ͏͏͏
͏│͏͏͏ 
│╭==⊱『 *push gb terbuka* 』
│╰= .pushgb texs
│
│╭==⊱『 *push gbjd tertutup* 』
││ *melihat idgc ketik .listgc*
│╰= .pushgt id|jeda|texs
│
│╭==⊱『 *push gb jeda* 』
│╰= .pushgbjd jeda|texs
│
│╭==⊱『 *menu jpm & bcgc* 』
││.jpm
││.jpm2
││.jpmtesti
││.jpmslide
││.jpmslideht
││.keterangan
│╰✧
│
│╭==⊱『 *menu savekontak* 』
││.savekontak
││.savekontak2
│╰✧
│
│╭==⊱『 *beralih mode* 』
││.self
││.public
│╰✧
│╭==⊱『 *random menu* 』
││.pay
││.sc
││.owner
││.sticker
││.qc
││.tiktok
││.proses
││.done
│╰✧
╰───✧
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
    ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
     『 *©RikiShop-BoTz* 』
━━━━━━━━━━━━━━━━━━━━━━`
                 },
                 { id: 26, nama: 'Script Bot cpanel telegram', harga: 25000, deskripsiPanjang: 'cocok untuk open reseller di telegram.',
                   menuContent: `Fitur Script Bot cpanel telegram:\n
hai 👋 @_
⬛ WELCOME TO SC RIKI SHOP ⬛

➖➖ Information Bot ➖➖
🔹 Botname: cpanel telegram
🔹 Admin: @rikishopreal
🔹 Version: 0.0.1
🔹 Run via: panel
🔹 Runtime: _

➖➖ MENU ➖➖
🎯 /addprem idtele
🎯 /delprem idtele
🎯 /addowner idtele
🎯 /delowner idtele
🎯 /cadmin nama,idtele
🎯 /listprem
🎯 /ramlist
🎯 /panel
🎯 /listsrv
🎯 /listusr
🎯 /delusr
🎯 /delsrv
🎯 /listadp
🎯 /deladp
🎯 /setaudio (Set Audio Baru)

➖ AMBIL ID TELEGRAM ➖
🆔 /cekid

powered by @rikishopreal.`
                 },
                 { id: 27, nama: 'Script cpanel no button', harga: 15000, deskripsiPanjang: 'cocok untuk open reseller, fitur lumayan banyak.',
                   menuContent: `Fitur Script cpanel no button:\n
Hai Kak @_
_

┅═❏ *WELCOME TO SC RIKI SHOP* ❏═┅‎‎
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
 ═ 𝐘𝐓 : 𝐑𝐈𝐊𝐈 𝐒𝐇𝐎𝐏 ═

 友 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : _
 友 𝐍𝐮𝐦𝐛𝐞𝐫 : _
 友 𝐍𝐚𝐦𝐚 𝐒𝐜𝐫𝐢𝐩𝐭 : *CPANEL-SIMPEL*
 友 𝐕𝐞𝐫𝐬𝐢 𝐒𝐜𝐫𝐢𝐩𝐭 : *1.0*
 友 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐚𝐢𝐥𝐞𝐲𝐬 : *6.7.7*
 友 𝐇𝐚𝐫𝐢 : _
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
 友 .addseller : 62xxx/@tag
 友 delseller : 62xxx/@tag
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ 
╭==⊱『 *cpanel nama* 』
║. ┏⊱
║═▧ .1gb nama
║═▧ .2gb nama
║═▧ .3gb nama
║═▧ .4gb nama
║═▧ .5gb nama
║═▧ .6gb nama
║═▧ .7gb nama
║═▧ .8gb nama
║═▧ .9gb nama
║═▧ .10gb nama
║═▧ .unli nama
║═▧ .cadmin nama
║. ┗⊱
║
║═==⊱『 *cpanel nama + nomor* 』
║. ┏⊱
║═▧ .c1gb nama,62xx
║═▧ .c2gb nama,62xx
║═▧ .c3gb nama,62xx
║═▧ .c4gb nama,62xx
║═▧ .c5gb nama,62xx
║═▧ .c6gb nama,62xx
║═▧ .c7gb nama,62xx
║═▧ .c8gb nama,62xx
║═▧ .c9gb nama,62xx
║═▧ .c10gb nama,62xx
║═▧ .cunli nama,62xx
║═▧ .cadmin1 nama,62xx
║. ┗⊱
║
║═==⊱『 *del & add menu* 』
║. ┏⊱
║═▧ .listseller 
║═▧ .listadmin
║═▧ .listpanel
║═▧ .delpanel
║═▧ .deladmin
║═▧ .payment 
║═▧ .owner
║═▧ .self
║═▧ .public
║═▧ .linklog
║═▧ .infoscfre
║. ┗⊱
╰===✧

    ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
     『 *©RikiShop-BoTz* 』
━━━━━━━━━━━━━━━━━━━━━━.`
                 },
                 { id: 28, nama: 'Script cpanel 2srv', harga: 20000, deskripsiPanjang: 'cocok untuk open reseller dan tersedia  2 SRV, unutk menyimpan panel vripat dan reseller.',
                   menuContent: `Fitur Script cpanel 2srv:\n
┅═❏ *WELCOME TO SC RIKI SHOP* ❏═┅‎‎

ᶻᶻ   ﹒ Information - Users!
♡﹕#number﹕ _
♡﹕#Status ﹕ _
♡﹕#creator ﹕ Riki Shop Real
ᶻᶻ   ﹒ Information - Bot!
♡﹕#botname﹕_
♡﹕#Runtime Bot ﹕_
♡﹕#Uptime Vps﹕ _
♡﹕#Bot mode﹕  _
▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭

[ MENH UTAMA ]
• .cpanel-v1
• .cpanel-v2
• .payment

[ User free ]
• .tiktok
• .tiktokmp3
• .payment
• .qc { texs }
• .brat { texs }
• .suit
• .ttc
• .delttc
• .tohd
• .tourl
• .sticker
• .toimg
• .getpp
• .rvo

> Powered By Riki Shop Real
> https://linktr.ee/rikishopreal.`
                 }, 
                 { id: 29, nama: 'Script new-push-rikishop', harga: 20000, deskripsiPanjang: 'Script ini cocok untuk Pushkontak dan open bot Pushkontak fitur lumayan.',
                   menuContent: `Fitur Script new-push-rikishop:\n
🌟 Hello, @$_ 🌟
selamat _

═❏ *WELCOME TO SC RIKI SHOP* ❏═
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
 ═ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗕𝗢𝗧 ═
 友 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : _
 友 𝐍𝐮𝐦𝐛𝐞𝐫 : _
 友 𝐍𝐚𝐦𝐚 𝐒𝐜𝐫𝐢𝐩𝐭 : _
 友 𝐕𝐞𝐫𝐬𝐢 𝐒𝐜𝐫𝐢𝐩𝐭 : _
 友 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐚𝐢𝐥𝐞𝐲𝐬 : _
 友 𝐇𝐚𝐫𝐢 : _
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
╭─☠︎「 𝗠𝗘𝗡𝗨 𝗣𝗨𝗦𝗛 」☠︎
│➥☠︎.pushkontak
│➥☠︎.pushkontakjd
│➥☠︎.pushkontak1
│➥☠︎.pushkontak2
│➥☠︎.pushkontak3
│➥☠︎.savekontak
│➥☠︎.listgc
╰─⬣
╭─☠︎「 𝗠𝗘𝗡𝗨 𝗝𝗣𝗠 」☠︎
│➥☠︎.jpm
│➥☠︎.jpm1
│➥☠︎.jpmtesti
│➥☠︎.jpmslide
│➥☠︎.jpmslideht
╰─⬣
╭─☠︎「 𝗠𝗘𝗡𝗨 𝗝𝗕 」☠︎
│➥☠︎.formatned
│➥☠︎.formatjp
│➥☠︎.feadmin
│➥☠︎.allrec
│➥☠︎.proses
│➥☠︎.done
╰─⬣
╭─☠︎「 𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠 」☠︎
│➥☠︎.qc
│➥☠︎.tts
│➥☠︎.self
│➥☠︎.public
│➥☠︎.scbot
│➥☠︎.owner
│➥☠︎.tourl
│➥☠︎.tohd
│➥☠︎.sticker
│➥☠︎.payment 
│➥☠︎.tiktok
│➥☠︎.tiktokmp3
│➥☠︎.Instagram
╰─⬣
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
     『 ©𝗥𝗶𝗸𝗶𝗦𝗵𝗼𝗽-𝗕𝗼𝘁𝘇 』
━━━━━━━━━━━━━━━━━━━━━━.`
                 }, 
                 { id: 30, nama: 'Script push-versi-new', harga: 25000, deskripsiPanjang: 'Script ini cocok untuk Pushkontak dan open bot Pushkontak fitur lumayan.',
                   menuContent: `Fitur Script push-versi-new:\n
╭─✧【 _ BOT 】✧─╮
│ 🌟 Hello, @_!
╰───────────────────╯

╭─✧ BOT INFO ✧─╮
│ 🤖 Bot Name: _
│ 👑 Creator: _
│ 🔄 Version: new
│ 🔍 Mode: _
│ ⏳ Runtime: _
│ 🖥 VPS Uptime: _
│ 📆 Hari: _
╰─────────────╯

╭─✧ USER INFO ✧─╮
│ 📱 Number: _
│ 🏷 Status: _
╰─────────────╯

🌟 MENU BOT 🌟
━━━━━━━━━━━━━━━
⚙ *Push Menu* ⚙
├ .pushkontak
├ .pushkontakjd
├ .pushkontak1
├ .pushkontak2
├ .pushkontak3
├ .savekontak
╰─────
⚙ *Jpm Menu* ⚙
├ .jpm <teks>
├ .jpm2 <teks/img>
├ .jpmtesti <teks/img>
├ .jpmch <teks/img>
├ .upch <teks>
├ .upch2 <teks/img>
╰─────
⚙ *id Menu* ⚙
├ .listgc
├ .cekidch <idch>
├ .addidch <idch>
├ .delidch <idch>
├ .listidch
╰─────
⚙ *download Menu* ⚙
├ .play
├ .tiktok
├ .tiktokmp3
├ .instagram
├ .playtiktok
├ .videy
├ .xnxx
├ .ytmp3
├ .ytmp4
╰─────
⚙ *Store Menu* ⚙
├ .addproduk
├ .produk
├ .delproduk
├ .clearproduk
├ .struk
├ .proses
├ .done
├ .tambah
├ .kurang
├ .kali
├ .bagi
├ .payment
├ .feadmin
├ .formatjp
├ .formatned
├ .allrec
╰─────
⚙ *Random Menu* ⚙
├ .tohd
├ .sticker
├ .reactch
├ .tourl
├ .tourl2
├ .brat
├ .qc
├ .vo
├ .rvo
├ .tts
├ .getpp
├ .addsticker
├ .toimg
├ .boost
├ .restat
├ .self
├ .public
├ .devbot
╰─────
━━━━━━━━━━━━━━━
🌟 POWERED BY _ REAL 🌟.`
                 }, 
                 { id: 31, nama: 'Script rikishopreal-v0.5', harga: 45000, deskripsiPanjang: 'Script ini cocok untuk || open bot Pushkontak || open bot jaga grup || open reseller panel || sudah tersedia fitur buy panel otomatis || script free update.',
                   menuContent: `Fitur Script rikishopreal-v0.5:\n
┏━〔 *_* 〕━┓
┃ 👋 Hai, @_!
┗━━━━━━━━━━━━━━━┛

┌─〔 *Bot Info* 〕─┐
│ 🤖 Nama    : _
│ 👑 Creator : _
│ ⚙️ Mode    : _
│ ♻️ Versi   : _
│ ⏱ Runtime : _
│ 🖥 Uptime VPS : _
│ 📆 Hari    : _
└──────────────┘

┌─〔 *User Info* 〕─┐
│ 📱 Nomor : _
│ 🏷 Status: _
└──────────────┘

📂 *Menu Tersedia:*
━━━━━━━━━━━━━━━━━
╭───〔 *All - MENU* 〕───
│
├❏ *Akses Owner Menu*
│   ├⭔ .bl 62xxxx
│   ├⭔ .unbl 62xxxx
│   ├⭔ .listblacklist
│   ├⭔ .addaksesbot
│   ├⭔ .delaksesbot
│   ├⭔ .listaksesbot
│   ├⭔ .addakses
│   ├⭔ .delakses
│   ├⭔ .listakses
│   ├⭔ .addowner
│   ├⭔ .delowner
│   ├⭔ .listowner
│   └⭔ .clearowner
│
├❏ *Owner - Menu*
│   ├⭔ .ping
│   ├⭔ .devbot
│   ├⭔ .getcase
│   ├⭔ .addcase
│   ├⭔ .delcase
│   ├⭔ .self
│   ├⭔ .public
│   ├⭔ .scbot
│   ├⭔ .getpp
│   ├⭔ .upch
│   ├⭔ .upch2
│   ├⭔ .clearchat
│   ├⭔ .svsc
│   ├⭔ .sendsc
│   ├⭔ .getsc
│   ├⭔ .listsc
│   ├⭔ .delsc
│   ├⭔ .addomain
│   ├⭔ .deldomain
│   ├⭔ .listdomain
│   ├⭔ .subdomain
│   ├⭔ .delsampah
│   ├⭔ .restart
│   └⭔ .getip
│
├❏ *Main - Menu*
│   ├⭔ .translate
│   ├⭔ .cekkodam
│   ├⭔ .toimg
│   ├⭔ .addsticker
│   ├⭔ .dadu
│   ├⭔ .motivasi
│   ├⭔ .bijak
│   ├⭔ .renungan
│   ├⭔ .truth
│   ├⭔ .quotes
│   ├⭔ .dare
│   ├⭔ .bisakah ( text )
│   ├⭔ .apakah ( text )
│   ├⭔ .kapan ( text )
│   ├⭔ .kerangajaib ( text )
│   ├⭔ .cekmati ( nama )
│   ├⭔ .ceksifat ( nama )
│   ├⭔ .rate ( reply pesan )
│   ├⭔ .jodohku
│   ├⭔ .jadian
│   ├⭔ .halah ( text )
│   ├⭔ .hilih ( text )
│   ├⭔ .heleh ( text )   
│   ├⭔ .huluh ( text )   
│   └⭔ .holoh ( text )
│
├❏ *Game - Menu*
│   ├⭔ .kuis
│   ├⭔ .family100
│   ├⭔ .siapakahaku
│   ├⭔ .tebakanime
│   ├⭔ .tebakgambar
│   ├⭔ .tebakbom
│   ├⭔ .suit
│   ├⭔ .ttc
│   ├⭔ .delttc
│   └⭔ .menyerah
│
├❏ *Random - Menu*
│   ├⭔ .bocil
│   ├⭔ .waifu
│   ├⭔ .nsfw
│   ├⭔ .bokep
│   └⭔ .addokep
│
├❏ *Download - Menu*
│   ├⭔ .play
│   ├⭔ .playvid
│   ├⭔ .tiktok
│   ├⭔ .gitclone
│   ├⭔ .tiktokmp3
│   ├⭔ .instagram
│   ├⭔ .ytmp3
│   ├⭔ .ytmp4
│   ├⭔ .xnxx
│   ├⭔ .videy
│   ├⭔ .facebook
│   ├⭔ .mediafire
│   ├⭔ .spotify
│   ├⭔ .capcut
│   └⭔ .playtiktok
│
├❏ *Group - Menu*
│   ├⭔ .on
│   ├⭔ .off
│   ├⭔ .hidetag
│   ├⭔ .close
│   ├⭔ .open
│   ├⭔ .demote
│   ├⭔ .promote
│   ├⭔ .add
│   ├⭔ .kick
│   ├⭔ .delete
│   ├⭔ .tagall
│   ├⭔ .kudetgc
│   ├⭔ .joingc
│   ├⭔ .setppgp
│   └⭔ .delppgp
│
├❏ *Store - Menu*
│   ├⭔ .list
│   ├⭔ .addproduk
│   ├⭔ .produk
│   ├⭔ .delproduk
│   ├⭔ .clearproduk
│   ├⭔ .addlist
│   ├⭔ .dellist
│   ├⭔ .updatelist
│   ├⭔ .proses
│   ├⭔ .setproses
│   ├⭔ .changeproses
│   ├⭔ .delsetproses
│   ├⭔ .done
│   ├⭔ .setdone
│   ├⭔ .changedone
│   ├⭔ .delsetdone
│   ├⭔ .tambah
│   ├⭔ .kurang
│   ├⭔ .kali
│   ├⭔ .bagi
│   ├⭔ .produk
│   ├⭔ .payment 
│   ├⭔ .pros
│   ├⭔ .don
│   └⭔ .struk
│
├❏ *EditSond - Menu*
│   ├⭔ .bass ( reply audio )
│   ├⭔ .blown ( reply audio )
│   ├⭔ .deep ( reply audio )
│   ├⭔ .earrape ( reply audio )
│   ├⭔ .fast ( reply audio )
│   ├⭔ .fat ( reply audio )
│   ├⭔ .nightcore ( reply audio )
│   ├⭔ .reverse ( reply audio )  
│   ├⭔ .robot ( reply audio )   
│   ├⭔ .slow ( reply audio )   
│   ├⭔ .smooth ( reply audio )     
│   └⭔ .tupai ( reply audio )
│
├❏ *Push - Menu*
│   ├⭔ .tutorpush
│   ├⭔ .pushkontak
│   ├⭔ ︎.pushkontakjd
│   ├⭔ .pushkontak1
│   ├⭔ ︎.pushkontak2
│   ├⭔ .pushkontak3
│   ├⭔ .savekontak
│   ├⭔ .listgc
│   ├⭔ ︎.jpm
│   ├⭔ ︎.jpm2
│   ├⭔ ︎.jpmtesti
│   ├⭔ ︎.jpmch
│   ├⭔ ︎.joinch
│   ├⭔ ︎.cekidch
│   ├⭔ ︎.addidch
│   ├⭔ ︎.delidch
│   └⭔ ︎.listidch
│
├❏ *Tosl - Menu*
│   ├⭔ .ai
│   ├⭔ .deepsek
│   ├⭔ .tourl
│   ├⭔ .tourl2
│   ├⭔ .tohd
│   ├⭔ .ssweb
│   ├⭔ .shortlink
│   ├⭔ .shortlink-dl
│   ├⭔ .qc
│   ├⭔ .sticker
│   ├⭔ .brat
│   ├⭔ .brat2
│   ├⭔ .tts
│   ├⭔ .ttsanime
│   ├⭔ .rvo
│   ├⭔ .vo
│   ├⭔ .rch
│   ├⭔ .emojimix
│   ├⭔ .emojitogif
│   ├⭔ .removebg
│   ├⭔ .sertif
│   ├⭔ .ppcard
│   ├⭔ .twtpost
│   ├⭔ .enchard
│   ├⭔ .readqr
│   └⭔ .cktp
│
├❏ *Search - Menu*
│   ├⭔ .yts
│   ├⭔ .apkmod
│   ├⭔ .gimage
│   ├⭔ .pinterest
│   ├⭔ .sfile
│   ├⭔ .playstore
│   ├⭔ .xnxxs
│   ├⭔ .npmsearch
│   ├⭔ .tiktokstalk
│   ├⭔ .igstalk
│   ├⭔ .ytstalk
│   ├⭔ .topanime
│   └⭔ .ffstalk
│
├❏ *Panel - Menu*
│   ├⭔ .addprem
│   ├⭔ .delprem
│   ├⭔ .listprem
│   ├⭔ .addserverpanel
│   ├⭔ .delserverpanel
│   ├⭔ .listserverpanel
│   ├⭔ .cadmin
│   ├⭔ .delpanel
│   ├⭔ .listpanel
│   ├⭔ .listadmin
│   ├⭔ .deladmin
│   └⭔ .1gb - 10gb - unli
│
├❏ *BuyOtomatis - Menu*
│   ├⭔ .buypanel
│   ├⭔ .buyadp
│   ├⭔ .buyreseller
│   ├⭔ .resellersubdo
│   ├⭔ .buymurid
│   ├⭔ .buysc
│   ├⭔ .buysaldo
│   ├⭔ .buypulsa
│   ├⭔ .buykuota
│   ├⭔ .topupml
│   ├⭔ .topuff
│   └⭔ .topuppubg
│
├❏ *Cloudflare - Menu*
│   ├⭔ .adddomaincf
│   ├⭔ .listdomaincf
│   ├⭔ .deldomaincf
│   ├⭔ .clearallsubdo
│   └⭔ .getzone
│
├❏ *Setbot - Menu*
│   ├⭔ .autoai on/off
│   ├⭔ .pconly on/off
│   ├⭔ .gconly on/off
│   └⭔ .fitur
│
├❏ *Notif livejkt48 - Menu*
│   ├⭔ .startlive
│   ├⭔ .stoplive
│   ├⭔ .statuslive
│   ├⭔ .resetlive
│   ├⭔ .startlive
│   ├⭔ .startendlive
│   ├⭔ .statusendlive
│   ├⭔ .resetendlive
│   ├⭔ .restartendlive
│   └⭔ .testlive
│
├❏ *digitalOchean - Menu*
│   ├⭔ .createvps
│   ├⭔ .gantipwvps
│   ├⭔ .uninstallpanel
│   ├⭔ .installpanel
│   └⭔ .startwings
│
╰─────────────────
🌟 POWERED BY _ REAL 🌟.`
                 }, 
                 { id: 32, nama: 'Script NEW-STORE-X-GRUP-Rikibtz', harga: 15000, deskripsiPanjang: 'cocok untuk jaga grup dan ada fitur addlist nya.',
                   menuContent: `Fitur Script NEW-STORE-X-GRUP-Rikibtz:\n
*HALO KA _*
  
┅═❏ *WELCOME TO SC RIKI SHOP* ❏═┅‎‎
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
 ═ 𝐘𝐓 : 𝐑𝐈𝐊𝐈 𝐒𝐇𝐎𝐏 ═

 友 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : _
 友 𝐍𝐮𝐦𝐛𝐞𝐫 : _
 友 𝐍𝐚𝐦𝐚 𝐒𝐜𝐫𝐢𝐩𝐭 : *SC-STORE-X-GRUP*
 友 𝐕𝐞𝐫𝐬𝐢 𝐒𝐜𝐫𝐢𝐩𝐭 : *5.0.0*
 友 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐁𝐚𝐢𝐥𝐞𝐲𝐬 : *MODE PUBLIK*
 友 𝐇𝐚𝐫𝐢 : _
 友 𝐒𝐨𝐬𝐦𝐞𝐝 : _
 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬
▬▭▬▭[ *TESTIMONI* ]▬▭▬▭▬
* https://whatsapp.com/channel/0029VadvvgF6rsQljgBc7D1t
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
┏━━⊱ ▧ 「 *MENU GRUP* 」
┣❏⭔welcome
┣❏⭔goodbye 
┣❏⭔open
┣❏⭔close
┣❏⭔hidetag
┣❏⭔kick
┣❏⭔promote
┣❏⭔demote
┣❏⭔linkgc
┣❏⭔jeda
┣❏⭔public
┣❏⭔self
┗━━━━━━━━━━━━━━━━━━⊱
┏━━⊱ ▧ 「 *MENU STORE* 」
┣❏⭔addlist
┣❏⭔dellist 
┣❏⭔list
┣❏⭔rename
┣❏⭔updatelist
┣❏⭔tambah
┣❏⭔kurang
┣❏⭔bagi
┣❏⭔kali
┣❏⭔addsewa
┣❏⭔delsewa
┣❏⭔ceksewa
┣❏⭔proses
┣❏⭔done
┣❏⭔stiker
┣❏⭔addmem
┣❏⭔ping
┣❏⭔payment
┗━━━━━━━━━━━━━━━━━━⊱
┏━━⊱ ▧ 「 *MENU GRUP SETTING* 」
┣❏⭔setpay
┣❏⭔setdesk 
┣❏⭔setppgc
┣❏⭔resetlinkgc
┣❏⭔setbot
┣❏⭔delsetbot
┣❏⭔setname
┣❏⭔changep
┣❏⭔delsetp
┣❏⭔setdone
┣❏⭔delsetdone
┣❏⭔setwelcome
┣❏⭔delsetwelcome
┣❏⭔setleft
┣❏⭔delsetleft
┗━━━━━━━━━━━━━━━━━━⊱
┏━━⊱ ▧ 「 *MENU ANTI* 」
┣❏⭔antiwame
┣❏⭔antilink 
┣❏⭔antilinkgc
┣❏⭔antipromosi1
┣❏⭔antipromosi2
┣❏⭔antipromosi3
┣❏⭔antipromosi4
┣❏⭔antipromosi5
┣❏⭔antipromosi6
┣❏⭔antipromosi7
┣❏⭔antipromosi8
┣❏⭔antipromosi9
┗━━━━━━━━━━━━━━━━━━⊱
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬    
𝗟𝗜𝗦𝗧 𝗡𝗢𝗠𝗢𝗥 𝗔𝗡𝗧𝗜 𝗣𝗥𝗢𝗠𝗢𝗦𝗜
1 = Jpm
2 = Unchek
3 = Suntik Sosmed
4 = Set Andro / Rege
5 = Bot Wa / Panel / Vps
6 = Murid
7 = Logo Jb
8 = Bokep / Vcs / tokcik
9 = Apk

⌕ © *SC STORE X GRUP* ⌕.`
                 }
            ],
            
            "Jasa": [
                { id: 33, nama: 'Jasa install panel', harga: 10000, deskripsiPanjang: 'terima jadi, free domain, data vps di jamin aman 100%.' },
                { id: 34, nama: 'Jasa install tema', harga: 10000, deskripsiPanjang: 'bebas request tema, sesuai kemauan anda.' },
                { id: 35, nama: 'Jasa raname script', harga: 15000, deskripsiPanjang: 'full raname, Terima jadi, foto, nomor, nama, link dan lain-lain sudah full milik mu, type case dan plugin beda hrga, jika case 15k jika plugin 20k.' },
                { id: 36, nama: 'Jasa fix script', harga: 5000, deskripsiPanjang: 'fix sesuai eror, 1 fitur 5k tergantung tingkat kesulitan nya, jika sulit harga bisa jadi naik, jika muda harga bisa jadi turun.' }, 
                { id: 37, nama: 'Jasa pembuatan website payment', harga: 15000, deskripsiPanjang: 'untuk tampil website nya silahkan salin link di bawah ini. https://paymet-rikishop.vercel.app/' }, 
                { id: 38, nama: 'Jasa pembuatan website linktre', harga: 15000, deskripsiPanjang: 'untuk tampil website nya silahkan salin link di bawah ini. https://rikishopreal.vercel.app' }, 
                { id: 39, nama: 'Jasa pembuatan script', harga: 50000, deskripsiPanjang: 'jasa pembuatan ini tergantung fitur ya, harga mulai dari 20k - 50k dan seterusnya, semua sudah free raname dan request' }
            ],
                        "murid": [
                { id: 40, nama: 'Murid unbend', harga: 15000, deskripsiPanjang: `keuntungan join murid unbend || bisa unbend nomor sendri || bisa open jasa unbend || bisa open murid unbend lagi || mendapat kan teks gacor dan update teks || jamin balmon kalo ada niat dan selalu berusaha.` },
                { id: 41, nama: 'Murid suntik sosmed', harga: 10000, deskripsiPanjang: `keuntungan join murid suntik sosmed || bisa suntik akun sendiri || dapat web suntik murah || bisa open jasa suntik || deposit webiste nya murah || bisa open murid lagi || jamin balmon kalo ada niat dan selalu berusaha.` },
                { id: 42, nama: 'Murid logo bahan', harga: 5000, deskripsiPanjang: `keuntungan join murid logo bahan || bisa open logo || mendapatkan bahan pasti nya || bahan full + tutor || bisa open murid lagi || jamin balmon kalo ada niat dan selalu berusaha.` },
                { id: 43, nama: 'Murid logo ai', harga: 5000, deskripsiPanjang: `keuntungan join murid logo ai || membuat logo dengan mudah menggunakan teks || bisa open logo kece || teks kece² dan ada update teks jika mod || bisa open murid lagi || jamin balmon kalo ada niat dan selalu berusaha.` }, 
                { id: 44, nama: 'Reseller Panel', harga: 20000, deskripsiPanjang: `KEUNTUNGAN JOIN RESELLER PANEL VRIPATE 📝
||* Masa aktif permanen 
||* Bebas crate panel tanpa batas ram 
||* Mendapatkan script pushkontak 
||* Bisa jual panel per GB bahkan unli
||* Bakal balik modal jika kamu niat
||* patung 5k jika panel mokad atau down
||* Kenapa ko patungan? Iya karena buat ganti Server.` }, 
                { id: 45, nama: 'Pt Panel', harga: 40000, deskripsiPanjang: `KEUNTUNGAN JOIN PT PANEL
||* Masa aktif permanen
||* bisa jualan panel
||* Bisa open admin panel
||* Bisa open reseller panel
||* Free script cpanel, push, jagagb
||* Dapet tutor step by step nya di deskripsi grup
||* Di jamin balik modal kalo kamu ada niat dan usaha 
||* Patunga 5k kalo panel nya mokad atau down
||* Kegunaan patungan adalah untuk mengganti server jika terjadi mokad atau down.` }
            ],
            
            "Sewa Bot": [
                { id: 46, nama: 'Bot Push Kontak 1 Hari', harga: 5000, deskripsiPanjang: 'Spesifikasi 💾 || ▪︎ bot tinggal pasang saja tidak ribet || ▪︎ buy bakal di ajarkan sampai bisa || ▪︎ bot sudah di lengkapi garansi || ▪︎ setiap harga bot garansi berbeda beda || ▪︎ gas order sekarang juga dengan cara hubungi owner' },
                { id: 47, nama: 'Bot Push Kontak 5 Hari', harga: 10000, deskripsiPanjang: 'Spesifikasi 💾 || ▪︎ bot tinggal pasang saja tidak ribet || ▪︎ buy bakal di ajarkan sampai bisa || ▪︎ bot sudah di lengkapi garansi || ▪︎ setiap harga bot garansi berbeda beda || ▪︎ gas order sekarang juga dengan cara hubungi owner' },
                { id: 48, nama: 'Bot Push Kontak 7 Hari', harga: 15000, deskripsiPanjang: 'Spesifikasi 💾 || ▪︎ bot tinggal pasang saja tidak ribet || ▪︎ buy bakal di ajarkan sampai bisa || ▪︎ bot sudah di lengkapi garansi || ▪︎ setiap harga bot garansi berbeda beda || ▪︎ gas order sekarang juga dengan cara hubungi owner' },
                { id: 49, nama: 'Bot Push Kontak 15 hari', harga: 20000, deskripsiPanjang: 'Spesifikasi 💾 || ▪︎ bot tinggal pasang saja tidak ribet || ▪︎ buy bakal di ajarkan sampai bisa || ▪︎ bot sudah di lengkapi garansi || ▪︎ setiap harga bot garansi berbeda beda || ▪︎ gas order sekarang juga dengan cara hubungi owner' },
                { id: 50, nama: 'Bot Push Kontak 15 Hari', harga: 25000, deskripsiPanjang: 'Spesifikasi 💾 || ▪︎ bot tinggal pasang saja tidak ribet || ▪︎ buy bakal di ajarkan sampai bisa || ▪︎ bot sudah di lengkapi garansi || ▪︎ setiap harga bot garansi berbeda beda || ▪︎ gas order sekarang juga dengan cara hubungi owner' },
                { id: 51, nama: 'Bot Push Kontak 20 Hari', harga: 30000, deskripsiPanjang: 'Spesifikasi 💾 || ▪︎ bot tinggal pasang saja tidak ribet || ▪︎ buy bakal di ajarkan sampai bisa || ▪︎ bot sudah di lengkapi garansi || ▪︎ setiap harga bot garansi berbeda beda || ▪︎ gas order sekarang juga dengan cara hubungi owner' },
                { id: 52, nama: 'Bot Push Kontak 25 Hari', harga: 35000, deskripsiPanjang: 'Spesifikasi 💾 || ▪︎ bot tinggal pasang saja tidak ribet || ▪︎ buy bakal di ajarkan sampai bisa || ▪︎ bot sudah di lengkapi garansi || ▪︎ setiap harga bot garansi berbeda beda || ▪︎ gas order sekarang juga dengan cara hubungi owner' },
                { id: 53, nama: 'Bot Push Kontak 30 Hari', harga: 40000, deskripsiPanjang: 'Spesifikasi 💾 || ▪︎ bot tinggal pasang saja tidak ribet || ▪︎ buy bakal di ajarkan sampai bisa || ▪︎ bot sudah di lengkapi garansi || ▪︎ setiap harga bot garansi berbeda beda || ▪︎ gas order sekarang juga dengan cara hubungi owner' },
                { id: 54, nama: 'Bot Jaga Grup 7 Hari', harga: 15000, deskripsiPanjang: 'Spesifikasi 💾 || ▪︎ bot tinggal pasang saja tidak ribet || ▪︎ buy bakal di ajarkan sampai bisa || ▪︎ bot sudah di lengkapi garansi || ▪︎ setiap harga bot garansi berbeda beda || ▪︎ gas order sekarang juga dengan cara hubungi owner' },
                { id: 55, nama: 'Bot Jaga Grup 15 Hari', harga: 25000, deskripsiPanjang: 'Spesifikasi 💾 || ▪︎ bot tinggal pasang saja tidak ribet || ▪︎ buy bakal di ajarkan sampai bisa || ▪︎ bot sudah di lengkapi garansi || ▪︎ setiap harga bot garansi berbeda beda || ▪︎ gas order sekarang juga dengan cara hubungi owner' },
                { id: 56, nama: 'Bot Jaga Grup 20 Hari', harga: 30000, deskripsiPanjang: 'Spesifikasi 💾 || ▪︎ bot tinggal pasang saja tidak ribet || ▪︎ buy bakal di ajarkan sampai bisa || ▪︎ bot sudah di lengkapi garansi || ▪︎ setiap harga bot garansi berbeda beda || ▪︎ gas order sekarang juga dengan cara hubungi owner' },
                { id: 57, nama: 'Bot Jaga Grup 30 Hari', harga: 40000, deskripsiPanjang: 'Spesifikasi 💾 || ▪︎ bot tinggal pasang saja tidak ribet || ▪︎ buy bakal di ajarkan sampai bisa || ▪︎ bot sudah di lengkapi garansi || ▪︎ setiap harga bot garansi berbeda beda || ▪︎ gas order sekarang juga dengan cara hubungi owner' },
            ]
        };

        let cart = JSON.parse(localStorage.getItem('rikishop_cart')) || [];
        let currentPage = 'home-page'; // Melacak halaman saat ini

        // --- Fungsi Pembantu ---

        // Fungsi untuk menampilkan halaman dan menyembunyikan halaman lain
        function showPage(pageId) {
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
            currentPage = pageId; // Perbarui pelacak halaman saat ini

            // Scroll ke atas halaman saat berganti halaman
            mainContainer.scrollTop = 0;
        }

        // Perbarui Tanggal dan Waktu untuk info-bar
        function updateDateTime() {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            };
            currentDateTimeSpan.textContent = now.toLocaleDateString('id-ID', options);
        }

        // Format angka ke mata uang Rupiah
        function formatRupiah(number) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(number);
        }

        // Fungsi untuk ucapan dinamis berdasarkan waktu
        function ucapan() {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) {
                return "Selamat Pagi";
            } else if (hour >= 12 && hour < 18) {
                return "Selamat Siang";
            } else if (hour >= 18 && hour < 22) {
                return "Selamat Sore";
            } else {
                return "Selamat Malam";
            }
        }

        // --- Logika Carousel Banner ---
        function showBanner(index) {
            const offset = -index * 100;
            bannerCarousel.style.transform = `translateX(${offset}%)`;
            bannerDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentBannerIndex = index;
        }

        function nextBanner() {
            currentBannerIndex = (currentBannerIndex + 1) % bannerDots.length;
            showBanner(currentBannerIndex);
        }

        function startBannerAutoSlide() {
            bannerInterval = setInterval(nextBanner, 5000); // Ganti banner setiap 5 detik
        }

        function stopBannerAutoSlide() {
            clearInterval(bannerInterval);
        }

        bannerDots.forEach(dot => {
            dot.addEventListener('click', () => {
                stopBannerAutoSlide();
                showBanner(parseInt(dot.dataset.index));
                startBannerAutoSlide(); // Mulai kembali auto-slide setelah interaksi manual
            });
        });

        // --- Logika Menu Offcanvas ---
        openMenuBtn.addEventListener('click', () => {
            offcanvasMenu.classList.add('active');
            overlay.classList.add('active');
            mainContainer.style.transform = `translateX(${offcanvasMenu.offsetWidth}px)`; // Dorong konten utama
        });

        closeMenuBtn.addEventListener('click', () => {
            offcanvasMenu.classList.remove('active');
            overlay.classList.remove('active');
            mainContainer.style.transform = 'translateX(0)'; // Kembalikan konten utama
        });

        overlay.addEventListener('click', () => {
            closeMenuBtn.click(); // Tutup menu saat overlay diklik
        });

        // Tangani Klik Link Menu Offcanvas
        document.querySelectorAll('#offcanvasMenu a').forEach(link => {
            link.addEventListener('click', function(e) {
                // Jangan cegah default jika itu link About Us Modal
                if (this.id === 'openAboutUsModal') {
                    e.preventDefault();
                    aboutUsModal.style.display = 'block';
                    closeMenuBtn.click(); // Tutup menu samping
                } else if (this.href.includes('free-scripts.html')) {
                    // Ini adalah link ke halaman eksternal, biarkan default behavior
                    // Tutup menu offcanvas secara manual
                    closeMenuBtn.click();
                    return; 
                } else {
                    e.preventDefault();
                    const targetPageId = this.dataset.page;
                    showPage(targetPageId);
                    closeMenuBtn.click(); // Tutup menu setelah pemilihan
                }
            });
        });

        // --- Logika Modal "Tentang Kami" ---
        openAboutUsModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            aboutUsModal.style.display = 'block';
            closeMenuBtn.click(); // Tutup offcanvas menu
        });

        closeAboutUsModalBtn.addEventListener('click', () => {
            aboutUsModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == aboutUsModal) {
                aboutUsModal.style.display = 'none';
            }
        });

        // --- Logika Modal Generik Menu Script ---
        closeGenericScriptMenuModalBtn.addEventListener('click', () => {
            genericScriptMenuModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == genericScriptMenuModal) {
                genericScriptMenuModal.style.display = 'none';
            }
        });


        // --- Logika Tampilan Layanan/Produk ---

        // Tangani Klik Item Layanan (misalnya, mengklik "Panel", "VPS", "Script")
        serviceItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const serviceType = item.dataset.service;
                loadServiceProducts(serviceType);
                showPage('service-detail-page');
            });
        });

        // Muat Produk untuk Tipe Layanan ke dalam productListDiv
        function loadServiceProducts(serviceType) {
            serviceDetailPageTitle.textContent = serviceType;
            productListDiv.innerHTML = ''; // Hapus produk sebelumnya
            productDetailViewDiv.style.display = 'none'; // Sembunyikan tampilan detail saat menampilkan daftar

            const productData = products[serviceType];
            if (productData && productData.length > 0) {
                productData.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.classList.add('product-item');
                    
                    // Untuk item Script, tambahkan deskripsi singkat dan harga hanya jika bukan 'Lihat Menu Bot'
                    let productHtml = `<span class="product-name">${product.nama}</span>`;
                    if (serviceType === 'Script' && product.isBotMenu) {
                         // Tidak ada deskripsi singkat atau harga untuk "Lihat Menu Bot" di tampilan daftar
                         productHtml += `<p class="product-short-desc">${product.deskripsiPanjang}</p>`; // Show full short desc for "Lihat Menu Bot"
                    } else {
                        // Tampilkan deskripsi singkat (jika ada) dan harga
                        productHtml += `<p class="product-short-desc">${product.deskripsiPanjang ? product.deskripsiPanjang.split('||')[0].trim() + '...' : ''}</p>`;
                        productHtml += `<span class="product-price-list">${product.harga > 0 ? formatRupiah(product.harga) : 'Gratis'}</span>`;
                    }
                    productHtml += `<i class="fas fa-chevron-right arrow"></i>`;
                    productItem.innerHTML = productHtml;

                    // Tambahkan event listener ke item produk
                    productItem.addEventListener('click', () => {
                        showProductDetail(product, serviceType); // Lewatkan serviceType juga
                    });
                    productListDiv.appendChild(productItem);
                });
                productListDiv.style.display = 'block'; // Pastikan daftar terlihat
            } else {
                productListDiv.innerHTML = '<p style="text-align: center; color: var(--light-text-color); padding: 20px;">Produk akan segera hadir.</p>';
            }
        }

        // Tampilkan Detail Produk (saat produk tertentu di daftar diklik)
        function showProductDetail(product, serviceType) { // Terima serviceType sebagai argumen
            productListDiv.style.display = 'none'; // Sembunyikan daftar produk
            productDetailViewDiv.style.display = 'block'; // Tampilkan detail produk

            detailProductName.textContent = product.nama;
            
            // Bersihkan konten sebelumnya dan kelas
            detailProductDescriptionContent.innerHTML = '';
            detailProductDescriptionContent.className = ''; 

            // Atur visibilitas harga dan tombol aksi
            detailProductPriceContainer.style.display = 'block';
            detailProductActions.style.display = 'flex';
            detailProductActions.innerHTML = ''; // Clear previous buttons

            // Logika untuk menampilkan konten dan tombol berdasarkan tipe produk
            if (serviceType === 'Script' && product.isBotMenu) {
                // Ini adalah item "Lihat Menu Bot"
                detailProductDescriptionContent.classList.add('script-menu-display'); // Tambahkan kelas khusus
                detailProductDescriptionContent.innerHTML = product.menuContent.replace(/\n/g, '<br>'); // Tampilkan konten menu bot

                // Sembunyikan harga dan tombol Add/Buy
                detailProductPriceContainer.style.display = 'none';
                detailProductActions.style.display = 'none'; // Sembunyikan semua tombol aksi
            } else {
                // Ini adalah produk normal (termasuk script non-bot)
                detailProductDescriptionContent.innerHTML = product.deskripsiPanjang ? product.deskripsiPanjang.replace(/\|\|/g, '<br>').replace(/▪︎/g, '•') : 'Tidak ada deskripsi.';
                
                // Tampilkan harga
                detailProductPriceContainer.style.display = 'block';
                detailProductPrice.textContent = formatRupiah(product.harga);

                // Tambahkan tombol Add to Cart dan Buy Now
                const addToCartBtn = document.createElement('button');
                addToCartBtn.className = 'add-to-cart';
                addToCartBtn.textContent = 'Tambah ke Keranjang';
                addToCartBtn.dataset.productId = product.id;
                addToCartBtn.dataset.productName = product.nama;
                addToCartBtn.dataset.productPrice = product.harga;
                addToCartBtn.addEventListener('click', addToCart);
                detailProductActions.appendChild(addToCartBtn);

                const buyNowLink = document.createElement('a');
                buyNowLink.className = 'buy-now';
                buyNowLink.textContent = 'Beli Sekarang (WhatsApp)';
                buyNowLink.href = `https://wa.me/${WA_ADMIN_NUMBER}?text=${encodeURIComponent(`Halo admin Rikishopreal, saya tertarik dengan produk ini:\n\n*${product.nama}*\nHarga: ${formatRupiah(product.harga)}\n\nDeskripsi:\n${product.deskripsiPanjang ? product.deskripsiPanjang.replace(/\|\|/g, '\n').replace(/▪︎/g, '•') : 'Tidak ada deskripsi.'}\n\nMohon info detail pembayarannya.`)}`;
                buyNowLink.target = "_blank";
                buyNowLink.setAttribute("rel", "noopener noreferrer"); // Tambahkan rel untuk keamanan
                detailProductActions.appendChild(buyNowLink);

                // Tambahkan tombol "Cek Menu" hanya untuk produk Script yang memiliki menuContent
                if (serviceType === 'Script' && product.menuContent) { // Product is a script and has menuContent
                    const cekMenuBtn = document.createElement('button');
                    cekMenuBtn.className = 'cek-menu';
                    cekMenuBtn.textContent = 'Cek Menu';
                    cekMenuBtn.addEventListener('click', () => {
                        genericScriptMenuTitle.textContent = `Menu ${product.nama}`;
                        genericScriptMenuContent.innerHTML = product.menuContent.replace(/\n/g, '<br>');
                        genericScriptMenuModal.style.display = 'block';
                    });
                    detailProductActions.appendChild(cekMenuBtn);
                }
            }
        }


        // --- Logika Tombol Kembali ---
        backArrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                const backToPageId = arrow.dataset.backTo;
                if (currentPage === 'service-detail-page' && productDetailViewDiv.style.display === 'block') {
                    // Jika saat ini melihat detail produk, kembali ke daftar produk
                    productListDiv.style.display = 'block';
                    productDetailViewDiv.style.display = 'none';
                } else if (backToPageId) {
                    // Kembali ke halaman yang ditentukan
                    showPage(backToPageId);
                } else {
                    // Default kembali ke halaman beranda jika tidak ditentukan
                    showPage('home-page');
                }
            });
        });

        // --- Logika Keranjang ---

        // Perbarui jumlah keranjang yang ditampilkan di header
        function updateCartCount() {
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCountSpan.textContent = count;
            cartCountSpan.style.display = count > 0 ? 'inline-block' : 'none';
        }

        // Tambahkan produk ke keranjang
        function addToCart(event) {
            const productId = parseInt(event.target.dataset.productId);
            const productName = event.target.dataset.productName;
            const productPrice = parseInt(event.target.dataset.productPrice);

            const existingItemIndex = cart.findIndex(item => item.id === productId);

            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }
            localStorage.setItem('rikishop_cart', JSON.stringify(cart));
            updateCartCount();
            alert(`${productName} telah ditambahkan ke keranjang!`);
        }

        // Render item keranjang di halaman keranjang
        function renderCart() {
            cartItemsList.innerHTML = ''; // Hapus item sebelumnya
            let total = 0;
            if (cart.length === 0) {
                cartItemsList.innerHTML = '<p style="text-align: center; color: var(--light-text-color); padding: 20px;">Keranjang Anda kosong.</p>';
            } else {
                cart.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <div class="item-info">
                            ${item.name} (${formatRupiah(item.price)}) x <span class="item-quantity">${item.quantity}</span>
                        </div>
                        <button class="remove-item" data-product-id="${item.id}"><i class="fas fa-trash"></i></button>
                    `;
                    cartItemsList.appendChild(listItem);
                    total += item.price * item.quantity;
                });
            }
            cartTotalSpan.textContent = formatRupiah(total);

            // Tambahkan event listener ke tombol hapus
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', removeFromCart);
            });
        }

        // Hapus item dari keranjang
        function removeFromCart(event) {
            const productId = parseInt(event.currentTarget.dataset.productId);
            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('rikishop_cart', JSON.stringify(cart));
            updateCartCount();
            renderCart(); // Render ulang keranjang setelah penghapusan
        }

        // Buka halaman keranjang
        openCartBtn.addEventListener('click', () => {
            showPage('cart-page');
            renderCart(); // Render item keranjang saat halaman keranjang dibuka
        });

        // Tombol checkout untuk keranjang
        checkoutButton.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Keranjang Anda kosong. Silakan tambahkan produk terlebih dahulu.');
                return;
            }

            let message = "Halo admin Rikishopreal, saya ingin memesan:\n\n";
            let totalOrder = 0;
            cart.forEach((item, index) => {
                message += `${index + 1}. ${item.name} (${formatRupiah(item.price)}) x ${item.quantity}\n`;
                totalOrder += item.price * item.quantity;
            });
            message += `\nTotal Harga: ${formatRupiah(totalOrder)}\n\nMohon info detail pembayarannya.`;

            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${WA_ADMIN_NUMBER}?text=${encodedMessage}`, '_blank');

            // Opsional bersihkan keranjang setelah checkout
            cart = [];
            localStorage.setItem('rikishop_cart', JSON.stringify(cart));
            updateCartCount();
            renderCart();
            alert('Pesanan Anda akan dikirimkan ke WhatsApp admin. Silakan lanjutkan percakapan di WhatsApp.');
        });

        // --- Logika Chat AI ---
        async function handleSendChatMessagePage() {
            const userInput = chatAiInputPage.value.trim();
            if (!userInput) return;

            appendMessageToChatPage(userInput, 'user-message');
            chatAiInputPage.value = '';
            chatAiInputPage.style.height = 'auto'; // Reset tinggi textarea
            if (chatAiLoadingPage) chatAiLoadingPage.style.display = 'flex';
            chatAiMessagesPage.scrollTop = chatAiMessagesPage.scrollHeight; // Gulir ke bawah

            try {
                const encodedInput = encodeURIComponent(userInput);
                const apiUrl = `https://newapiriki.vercel.app/ai/openai?apikey=rikinew&text=${encodedInput}`; // API AI Anda

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`Gagal mengambil data, status: ${response.status}`);
                }

                const data = await response.json();
                const aiResponseText = data.result || "Maaf, saya tidak mendapat jawaban yang valid dari AI.";

                appendMessageToChatPage(aiResponseText, 'ai-message');

            } catch (error) {
                console.error('Error fetching AI response:', error);
                appendMessageToChatPage(`Terjadi kesalahan: ${error.message}. Silakan coba lagi nanti.`, 'ai-message');
            } finally {
                if (chatAiLoadingPage) chatAiLoadingPage.style.display = 'none';
                chatAiMessagesPage.scrollTop = chatAiMessagesPage.scrollHeight;
            }
        }

        function appendMessageToChatPage(text, className) {
            if (!chatAiMessagesPage) return;
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', className);
            messageDiv.innerHTML = text.replace(/\n/g, '<br>'); // Izinkan baris baru untuk pemformatan
            chatAiMessagesPage.appendChild(messageDiv);
            chatAiMessagesPage.scrollTop = chatAiMessagesPage.scrollHeight; // Gulir otomatis
        }

        if (sendChatAiBtnPage) {
            sendChatAiBtnPage.addEventListener('click', handleSendChatMessagePage);
            chatAiInputPage.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendChatMessagePage();
                }
            });
            chatAiInputPage.addEventListener('input', () => {
                chatAiInputPage.style.height = 'auto';
                chatAiInputPage.style.height = (chatAiInputPage.scrollHeight) + 'px';
            });
        }


        // --- Logika Visitor Counter ---
        const visitorCountKey = 'rikishop_visitor_count';
        const sessionCountedKey = 'rikishop_session_counted'; // Flag for current session
        let visitorCount = parseInt(localStorage.getItem(visitorCountKey)) || 0;
        const visitorCountDisplay = document.getElementById('visitorCountDisplay');

        function updateVisitorCountDisplay() {
            visitorCountDisplay.innerHTML = `<i class="fas fa-users"></i> Jumlah Pengunjung Website: ${visitorCount}`;
        }

        // Increment visitor count only once per browser session
        if (sessionStorage.getItem(sessionCountedKey) !== 'true') {
            visitorCount++;
            localStorage.setItem(visitorCountKey, visitorCount);
            sessionStorage.setItem(sessionCountedKey, 'true'); // Mark as counted for this session
        }
        updateVisitorCountDisplay(); // Initial display


        // --- Inisialisasi Saat Memuat ---
        document.addEventListener('DOMContentLoaded', () => {
            // Sembunyikan main container sampai welcome screen selesai
            mainContainer.style.display = 'none';

            // Bersihkan keranjang saat memuat jika ada item sebelumnya (default: kosong)
            cart = [];
            localStorage.setItem('rikishop_cart', JSON.stringify(cart));
            
            updateDateTime(); // Mulai update jam setiap detik
            setInterval(updateDateTime, 1000); // Pastikan jam terus bergerak
            
            updateCartCount(); // Jumlah keranjang awal (akan 0)
            
            // Tampilkan welcome screen
            welcomeScreen.style.display = 'flex'; // Pastikan terlihat
            
            // Setelah beberapa detik, fade out welcome screen
            setTimeout(() => {
                welcomeScreen.classList.add('fade-out');
                welcomeScreen.addEventListener('transitionend', () => {
                    welcomeScreen.style.display = 'none';
                    mainContainer.style.display = 'flex'; // Tampilkan main container setelah fade out
                    showPage('home-page'); // Mulai di halaman beranda
                    startBannerAutoSlide(); // Mulai auto-slide banner
                }, { once: true });
            }, 3000); // Tampilkan welcome screen selama 3 detik (bisa diubah)
        });