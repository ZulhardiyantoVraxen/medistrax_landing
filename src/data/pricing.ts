export type Tier = {
  name: string;
  badge?: string;
  price: string;
  priceNote?: string;
  database: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export type ProductPricing = {
  key: "klinik" | "apotek" | "praktik";
  icon: string;
  title: string;
  tiers: Tier[];
};

export const pricingData: ProductPricing[] = [
  {
    key: "klinik",
    icon: "🏥",
    title: "Medistrax Klinik",
    tiers: [
      {
        name: "Starter",
        price: "Rp 700.000",
        priceNote: "/bulan",
        database: "Database 50GB",
        features: [
          "Rekam medis dasar",
          "Antrian digital",
          "Laporan standar",
          "Support WA 12 jam",
        ],
        cta: "Pilih Paket",
      },
      {
        name: "Growth",
        price: "Rp 1.500.000",
        priceNote: "/bulan",
        database: "Database 100GB",
        features: [
          "Semua fitur Starter",
          "Manajemen stok & kasir",
          "Manajemen staf",
          "Laporan keuangan",
        ],
        cta: "Pilih Paket",
      },
      {
        name: "Business",
        price: "Rp 3.000.000",
        priceNote: "/bulan",
        database: "Database 150GB",
        features: [
          "Semua fitur Growth",
          "Dashboard analitik",
          "Multi-user roles",
          "Laporan advanced",
        ],
        cta: "Pilih Paket",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        database: "Database custom",
        features: [
          "Unlimited cabang",
          "Dedicated AM 24/7",
          "SLA 99,9%",
          "Custom feature",
        ],
        cta: "Hubungi Kami",
      },
    ],
  },
  {
    key: "apotek",
    icon: "💊",
    title: "Medistrax Apotek",
    tiers: [
      {
        name: "Starter",
        price: "Rp 500.000",
        priceNote: "/bulan",
        database: "Database 50GB",
        features: ["Manajemen stok", "Peringatan expired", "Retur obat"],
        cta: "Pilih Paket",
      },
      {
        name: "Growth",
        price: "Rp 1.200.000",
        priceNote: "/bulan",
        database: "Database 100GB",
        features: [
          "Semua fitur Starter",
          "E-faktur",
          "Laporan omzet",
          "Barcode system",
        ],
        cta: "Pilih Paket",
      },
      {
        name: "Business",
        price: "Rp 2.200.000",
        priceNote: "/bulan",
        database: "Database 150GB",
        features: [
          "Semua fitur Growth",
          "Multi-cabang",
          "Dashboard real-time",
          "Pembukuan otomatis",
        ],
        cta: "Pilih Paket",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        database: "Database custom",
        features: [
          "Unlimited cabang",
          "Integrasi PBF",
          "API access",
          "Custom report",
        ],
        cta: "Hubungi Kami",
      },
    ],
  },
  {
    key: "praktik",
    icon: "🧑‍⚕️",
    title: "Medistrax Praktik Dokter",
    tiers: [
      {
        name: "Starter",
        badge: "⭐ Paling Populer",
        price: "Rp 400.000",
        priceNote: "/bulan",
        database: "Database 50GB",
        features: [
          "Rekam medis digital",
          "Resep elektronik",
          "Cetak kwitansi",
          "Manajemen pasien",
          "Support WA 12 jam",
        ],
        cta: "Pilih Paket",
      },
      {
        name: "Growth",
        price: "Rp 800.000",
        priceNote: "/bulan",
        database: "Database 100GB",
        features: [
          "Semua fitur Starter",
          "Janji temu online",
          "Notifikasi pasien",
          "Laporan praktik",
        ],
        cta: "Pilih Paket",
      },
      {
        name: "Business",
        price: "Rp 1.500.000",
        priceNote: "/bulan",
        database: "Database 150GB",
        features: [
          "Semua fitur Growth",
          "Laporan lab",
          "Rujukan digital",
          "E-klaim BPJS",
        ],
        cta: "Pilih Paket",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        database: "Database custom",
        features: [
          "Unlimited cabang",
          "Dashboard custom",
          "API access",
          "Priority support",
        ],
        cta: "Hubungi Kami",
      },
    ],
  },
];

export const addOns = [
  { name: "Multi-cabang (per cabang tambahan)", price: "Rp 500.000/bulan" },
  { name: "Integrasi BPJS Kesehatan", price: "Rp 300.000/bulan" },
  { name: "Integrasi SATUSEHAT", price: "Rp 200.000/bulan", featured: true },
  { name: "Priority Support 24/7", price: "Rp 200.000/bulan" },
  { name: "Custom Report & Dashboard", price: "Rp 500.000 (one-time)" },
  { name: "API Access", price: "Rp 300.000/bulan" },
  { name: "Additional Storage (per 10GB)", price: "Rp 50.000/bulan" },
];

export const comparisonTable = {
  columns: [
    "Fitur",
    "Klinik Starter",
    "Klinik Enterprise",
    "Apotek Starter",
    "Apotek Enterprise",
    "Praktik Dokter Starter",
    "Praktik Dokter Enterprise",
  ],
  rows: [
    ["Harga mulai", "Rp 700k", "Custom", "Rp 500k", "Custom", "Rp 400k", "Custom"],
    ["Kapasitas Database", "50GB", "Custom", "50GB", "Custom", "50GB", "Custom"],
    ["Maksimal Cabang", "1 cabang", "Unlimited", "1 cabang", "Unlimited", "1 lokasi", "Unlimited"],
    ["Manajemen Tenaga Medis", "30 orang", "Unlimited", "-", "-", "1 dokter", "Unlimited dokter"],
    ["Manajemen Stok Obat", "-", "-", "✓", "✓ Multi-cabang", "-", "-"],
    ["Point of Sale (POS)", "-", "-", "✓", "✓ Multi-cabang", "-", "-"],
    ["Appointment Online", "Basic", "Advanced", "-", "-", "✓", "✓ Advanced"],
    ["Rekam Medis Elektronik", "✓", "✓ Terpusat", "-", "-", "✓", "✓ Terpusat"],
    ["Resep Elektronik", "✓", "✓", "-", "-", "✓", "✓"],
    ["Integrasi BPJS", "✓", "✓ Plus Auto-claim", "-", "-", "✓", "✓ Plus Auto-claim"],
    ["Integrasi SATUSEHAT", "-", "✓", "-", "-", "-", "✓"],
    ["Multi-cabang Dashboard", "-", "✓", "-", "✓", "-", "✓"],
    ["Custom Report", "Standar", "Advanced", "Standar", "Advanced", "Standar", "Advanced"],
    ["Support", "WA 12 jam", "24/7 + Dedicated AM", "WA 12 jam", "24/7 + Dedicated AM", "WA 12 jam", "24/7 + Dedicated AM"],
    ["Kustomisasi", "-", "✓", "-", "✓", "-", "✓"],
  ],
};
