import {useState} from "react";
import Header from "../componens/commons/Header";

function SimulasiKredit() {
    const [formData, setFormData] = useState({
        plafond:'',
        bungaBulan:'1.5',
        biayaNotaris:'0',
        biayaMaterai:'0',
        biayaAdministrasi:'0',
        biayaProvisi:'0',
        biayaAsuransi:'0',
        biayaAngsuranPertama:'0',
        biayaLainnya:'0'
    });

    // Helper untuk format Rupiah
    const formatRupiah = (angka) => {
      if (isNaN(angka)) return 'Rp 0';
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(angka);
    };

    //menyimpan hasil perhitungan simulasi kredit
    const [result, setResult] = useState(null);

    const tenorList = [6, 10, 12, 18, 24, 30, 36, 42, 48, 54, 60];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //menghitung simulasi kredit
        const p = parseFloat(formData.plafond) || 0;
        const b = parseFloat(formData.bungaBulan) || 0;
        const n = parseFloat(formData.biayaNotaris) || 0;
        const m = parseFloat(formData.biayaMaterai) || 0;
        const adm = parseFloat(formData.biayaAdministrasi) || 0;
        const pr = parseFloat(formData.biayaProvisi) || 0;
        const as = parseFloat(formData.biayaAsuransi) || 0;
        const ap = parseFloat(formData.biayaAngsuranPertama) || 0;
        const bl = parseFloat(formData.biayaLainnya) || 0;
        
        const pt = Math.ceil((p * (b/100))/500) * 500;
        const angsuranPa = {};
        
        tenorList.forEach((t) => {
            angsuranPa[t] = Math.ceil(((((p * (b/100)) * t) + p) / t) / 500) * 500;
        });

        const nominalAdm = (adm / 100) * p;
        const nominalProvisi = (pr / 100) * p;
        
        const terimaBersih = p - (nominalAdm + nominalProvisi + n + as + bl + ap + m);

        setResult({
            p,
            angsuranPa,
            pt,
            nominalAdm,
            nominalProvisi,
            terimaBersih,
            n,
            m,
            adm,
            pr,
            as,
            ap,
            bl
        });
    }

    const handleReset = () => {
            setFormData({
                plafond:'',
                bungaBulan:'1.5',
                biayaNotaris:'0',
                biayaMaterai:'0',
                biayaAdministrasi:'0',
                biayaProvisi:'0',
                biayaAsuransi:'0',
                biayaAngsuranPertama:'0',
                biayaLainnya:'0'
            });
            setResult(null);
    };
    return (
        <div>
            <Header />
            <main className="main-content">
        {/* === KOLOM 1: FORM INPUT === */}
        <section className="card form-section">
          <h2 className="section-title">Data Pengajuan</h2>
          <div className="form-grid">
            <div className="input-group">
              <label>Plafond (Rp)</label>
              <input type="number" name="plafond" placeholder="Masukkan nominal plafond" value={formData.plafond} onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>Bunga per Bulan (%)</label>
              <input type="number" name="bungaBulan" step="0.01" value={formData.bungaBulan} onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>Biaya Notaris (Rp)</label>
              <input type="number" name="biayaNotaris" value={formData.biayaNotaris} onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>Biaya Materai (Rp)</label>
              <input type="number" name="biayaMaterai" value={formData.biayaMaterai} onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>Biaya Administrasi (%)</label>
              <input type="number" name="biayaAdministrasi" step="0.01" value={formData.biayaAdministrasi} onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>Biaya Provisi (%)</label>
              <input type="number" name="biayaProvisi" step="0.01" value={formData.biayaProvisi} onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>Angsuran Berjalan (Rp)</label>
              <input type="number" name="biayaAngsuranPertama" value={formData.biayaAngsuranPertama} onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>Pelunasan / Biaya Lain (Rp)</label>
              <input type="number" name="biayaLainnya" value={formData.biayaLainnya} onChange={handleInputChange} />
            </div>
          </div>
          <div className="button-group">
            <button className="btn btn-primary" onClick={handleSubmit}>Hitung</button>
            <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
          </div>
        </section>

        {/* === KOLOM 2: TABEL PINJAMAN === */}
        <section className="card table-section">
          <h2 className="section-title">Pinjaman PA</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Tenor (Bulan)</th>
                <th>Nominal Angsuran (Rp)</th>
              </tr>
            </thead>
            <tbody>
              {/* Me-render tabel secara otomatis dari tenorList */}
              {tenorList.map((tenor) => (
                <tr key={tenor}>
                  <td>{tenor}</td>
                  <td>{result ? formatRupiah(result.angsuranPa[tenor]) : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="section-title mt-4">Pinjaman PT</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Tenor</th>
                <th>Bunga per Bulan (Rp)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bunga/Bln</td>
                <td>{result ? formatRupiah(result.pt) : '-'}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* === KOLOM 3: RINCIAN PENCAIRAN === */}
        <section className="card summary-section">
          <h2 className="section-title">Rincian Potongan & Pencairan</h2>
          <div className="summary-row fw-bold">
            <span>Plafond Disetujui:</span>
            <span>{result ? formatRupiah(result.p) : 'Rp 0'}</span>
          </div>
          <hr />
          <div className="summary-row">
            <span>Biaya Notaris:</span>
            <span>{result ? formatRupiah(result.n) : 'Rp 0'}</span>
          </div>
          <div className="summary-row">
            <span>Biaya Administrasi:</span>
            <span>{result ? `${formatRupiah(result.nominalAdm)} (${result.adm}%)` : 'Rp 0'}</span>
          </div>
          <div className="summary-row">
            <span>Biaya Provisi:</span>
            <span>{result ? `${formatRupiah(result.nominalProvisi)} (${result.pr}%)` : 'Rp 0'}</span>
          </div>
          <div className="summary-row">
            <span>Biaya Materai:</span>
            <span>{result ? formatRupiah(result.m) : 'Rp 0'}</span>
          </div>
          <div className="summary-row">
            <span>Potongan Angsuran/Bunga :</span>
            <span>{result ? formatRupiah(result.ap) : 'Rp 0'}</span>
          </div>
          <div className="summary-row">
            <span>Biaya lainnya :</span>
            <span>{result ? formatRupiah(result.bl) : 'Rp 0'}</span>
          </div>
          
          <div className="summary-total">
            <span className="fw-bold">Total Terima Bersih:</span>
            <span className="fw-bold">{result ? formatRupiah(result.terimaBersih) : 'Rp 0'}</span>
          </div>
        </section>

      </main>
        </div>
    );
}

export default SimulasiKredit;