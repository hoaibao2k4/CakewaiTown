import Categories from "~/components/Categories";

type Params = Promise<{category? : string}>

export async function generateMetadata(props :  {params : Params}) {
  const params = await props.params 
  const category = params.category || "bánh"

  const categoryMeta = {
    "banh-sinh-nhat": {
      title: "Bánh Sinh Nhật Ngon Nhất - Đặt Hàng Nhanh Chóng",
      description: "Khám phá bộ sưu tập bánh sinh nhật tuyệt vời, đa dạng mẫu mã và hương vị hấp dẫn.",
      //image: "https://example.com/images/banh-sinh-nhat.jpg"
    },
    "banh-kem": {
      title: "Bánh Kem Ngọt Ngào - Đa Dạng Hương Vị",
      description: "Thưởng thức bánh kem thơm ngon với nhiều lớp kem mịn, hoàn hảo cho mọi dịp.",
      //image: "https://example.com/images/banh-kem.jpg"
    },
    "banh-cookie": {
      title: "Bánh Cookie Giòn Tan - Hương Vị Đặc Biệt",
      description: "Mua bánh cookie homemade giòn rụm, thơm lừng, làm từ nguyên liệu tươi ngon nhất.",
      //image: "https://example.com/images/banh-cookie.jpg"
    },
    "banh-man": {
      title: "Bánh Mặn - Hương Vị Độc Đáo 🥪",
      description: "Khám phá các loại bánh mặn hấp dẫn, phù hợp cho bữa sáng hoặc tiệc nhẹ.",
      //image: "https://example.com/images/banh-man.jpg"
    }
  };

  const { title, description } = categoryMeta[category] || {
    title: "Khám Phá Các Loại Bánh Ngon Nhất 🍞",
    description: "Bộ sưu tập bánh đa dạng: bánh sinh nhật, bánh kem, cookie, bánh mặn và nhiều hơn thế.",
    //image: "https://example.com/images/default-banh.jpg"
  };

  return {
    title,
    description,
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: `https://cakewaitown/category/${category}`,
      type: "website",
      siteName: "Tiệm Bánh Ngọt",
      //images: [{ url: image, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      //images: [image]
    }
  };
}

export default async function CategoryPage(props : { params: Params }) {
  const params = await props.params
  const category = params.category
  return (
    <main>
      <Categories params={category} />
    </main>
  );
}
