import CategoryCard from "@/components/CategoryCard";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import { CategoryItems } from "@/data";
import { SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

export default function Categories() {
    return (
        <>
            <Hero data={{ title: 'Categories', subtitle: 'Explore these popular photo categories on Theme Store.', image: './categories.jpg' }} />

            <SimpleGrid columns={[1, 2, 3, 4]} spacing={9} paddingY={7} paddingX={5}>
                {
                    CategoryItems.map((item, index) => (
                        <Link key={index} href={`/categories/${item.category}`}>
                            <CategoryCard category={item} />
                        </Link>
                    ))
                }
            </SimpleGrid>

            <ScrollToTop />
        </>
    )
}
