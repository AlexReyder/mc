import { AdvantagesSection } from '@/sections/AdvantagesSection/AdvantagesSection'
import { CTASection } from '@/sections/CTASection/CTASection'
import ConstructorSection from '@/sections/ConstructorSection/ConstructorSection'
import GallerySection from '@/sections/GallerySection/GallerySection'
import { HeroSection } from '@/sections/HeroSection/HeroSection'
import MSProperties from '@/sections/MSProperties/MSProperties'
import ProductTextSection from '@/sections/ProductTextSection/ProductTextSection'
import ReasonSection from '@/sections/ReasonSection/ReasonSection'
import UsageSection from '@/sections/UsageSection/UsageSection'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
export default function Home() {
	return (
		<main>
			<Header />
			<HeroSection />
			<ProductTextSection />
			<UsageSection />
			<AdvantagesSection />
			<ConstructorSection />
			<MSProperties />
			<GallerySection />
			<ReasonSection />
			<CTASection
				heading={'Поможем с выбором и рассчитаем стоимость'}
				bg={'/img/cta/1.jpg'}
			/>
			<Footer />
		</main>
	)
}
