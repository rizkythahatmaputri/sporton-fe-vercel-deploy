// Base function untuk fetch data dari API

export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    cache: options?.cache || "no-store", // kita set no-store karena kita ingin mendapat data lebih real time atau lebih updated (tidak cache)
  });

  // kalau respon tidak berhasil: kita buat pesan error default, lalu kita coba untuk ambil pesan error yang lebih spesifik dari response body, kalau tidak bisa kita tetap gunakan pesan error default
  if (!res.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch (e) {
      console.log(e);
    }

    throw new Error(errorMessage);
  }

  return res.json();
  //   jadi kita return respon dari api nya (const res) dalam bentuk json
}

// Function untuk GET image url, karena di API kita hanya dapat path nya saja, jadi kita perlu buat function untuk mengubah path tersebut menjadi url yang lengkap
export function getImageUrl(path: string) {
  if (path.startsWith("http")) return path; // artinya url nya sudah valid
  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}
