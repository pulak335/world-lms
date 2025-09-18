import Hero from '../components/Hero';
import PromoSection from '../components/PromoSection';
import CourseCategories from '../components/CourseCategories';
import FeaturedCourses from '../components/FeaturedCourses';
import NewestCourses from '../components/NewestCourses';
import TrendingCourses from '../components/TrendingCourses';
import BecomeInstructor from '../components/BecomeInstructor';
import MentorSection from '../components/MentorSection';
import StudentStories from '../components/StudentStories';
import UniversityCourses from '../components/UniversityCourses';
import SemesterSelection from '../components/SemesterSelection';
import OTHMBanner from '../components/OTHMBanner';
import UniversityLogos from '../components/UniversityLogos';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <UniversityLogos />
      <PromoSection />
      <SemesterSelection />
      <UniversityCourses />
      <OTHMBanner />
      <CourseCategories />
      <FeaturedCourses />
      <NewestCourses />
      <TrendingCourses />
      <BecomeInstructor />
      <MentorSection />
      <StudentStories />
    </main>
  )
}
