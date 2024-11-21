
function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Melbokno jenengmu blok');
    } else {
        let status = [
            'isi'
            
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'Ksatria 8F',
                'Maskot Alam',
                'Triple S',
                'KING OF ZAKZXR',
                'Mie Ayam Geprek',
                'Seblak',
                'Nunung & Dudung',
                'Tekel',
                'Ustad Iqbal',
                'Yogi Tambal ban',
                'Genk Lemak Babi',
                'Budi Cengok',
                'HP Kuu Ilangg',
                'Olip Anak e Silo',
                'Risma Prengat Prengut',
                'Lida Paski Kw',
                'Bubuk Cabe',
                'Pak Has Balap',
                'Pak Totok Rimex',
                'Bu Suratmi',
                'Teh Point',
                "Ustad Rafi",
                'Jawir Sigma Banget'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});
