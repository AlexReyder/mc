import { AdvantagesSection } from '@/sections/AdvantagesSection/AdvantagesSection'
import { CTASection } from '@/sections/CTASection/CTASection'
import ConstructorSection from '@/sections/ConstructorSection/ConstructorSection'
import GallerySection from '@/sections/GallerySection/GallerySection'
import { HeroSection } from '@/sections/HeroSection/HeroSection'
import MSProperties from '@/sections/MSProperties/MSProperties'
import { MapSection } from '@/sections/MapSection/MapSection'
import ProductTextSection from '@/sections/ProductTextSection/ProductTextSection'
import QuizSection from '@/sections/QuizSection/QuizSection'
import ReasonSection from '@/sections/ReasonSection/ReasonSection'
import UsageSection from '@/sections/UsageSection/UsageSection'
export default function Home() {
	return (
		<main>
			<HeroSection />
			<ProductTextSection />
			<UsageSection />
			<AdvantagesSection />
			<ConstructorSection />
			<MSProperties />
			<QuizSection />
			<MapSection />
			<GallerySection />
			<ReasonSection />
			<CTASection />
		</main>
	)
}
