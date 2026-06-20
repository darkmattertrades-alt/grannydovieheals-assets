import { redirect } from "next/navigation"

type Props = {
  params: { category: string }
}

export default function CategoryRedirect({ params }: Props) {
  redirect(`/blog/category/${params.category}`)
}
