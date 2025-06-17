        // Data script untuk menyimpan ID unik dan URL Preview
        const freeScriptsData = [
            { id: "auto_like_ig", previewUrl: "https://www.youtube.com/watch?v=contoh_video_autolike" },
            { id: "bot_telegram", previewUrl: "https://www.youtube.com/watch?v=contoh_video_telegram" },
            { id: "landing_page", previewUrl: "https://www.youtube.com/watch?v=contoh_video_landingpage" }
            // Tambahkan ID script lainnya dengan previewUrl
        ];

        // Fungsi untuk mengupdate tampilan jumlah download
        function updateDownloadCounts() {
            let globalCount = 0;
            freeScriptsData.forEach(script => {
                const count = parseInt(localStorage.getItem(`download_${script.id}`)) || 0;
                const downloadSpan = document.getElementById(`downloads_${script.id}`);
                if (downloadSpan) { // Pastikan elemen ada
                    downloadSpan.textContent = count;
                }
                globalCount += count;
            });
            const globalDownloadCountSpan = document.getElementById('global-download-count');
            if (globalDownloadCountSpan) {
                globalDownloadCountSpan.textContent = globalCount;
            }
        }

        // Event listener untuk tombol download
        document.querySelectorAll('.download-button').forEach(button => {
            button.addEventListener('click', function(event) {
                const scriptId = this.dataset.scriptId;
                if (scriptId) {
                    let currentCount = parseInt(localStorage.getItem(`download_${scriptId}`)) || 0;
                    currentCount++;
                    localStorage.setItem(`download_${scriptId}`, currentCount);
                    updateDownloadCounts(); // Update tampilan setelah klik
                }
            });
        });

        // Logika untuk loading screen
        window.onload = function() {
            setTimeout(function(){
                document.body.classList.add('loaded');
                // Mengatur overflow kembali ke auto setelah loading selesai dan animasi fade-out
                // Pastikan animasi opacity selesai sebelum overflow diubah
                const loadingScreen = document.getElementById('loading-screen');
                loadingScreen.addEventListener('transitionend', function() {
                    document.body.style.overflow = 'auto'; 
                }, { once: true });

            }, 2000); // Tampilkan loading screen selama 2 detik
        };

        // Update jumlah download saat halaman dimuat
        document.addEventListener('DOMContentLoaded', updateDownloadCounts);