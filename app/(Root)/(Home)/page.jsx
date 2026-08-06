import BeautyBlog from '@/components/BeautyBlog'
import Benefits from '@/components/Benefits'
import Brands from '@/components/Brands'
import Categories from '@/components/Categories'
import CustomerReviews from '@/components/CustomerReviews'
import Hero from '@/components/Hero'
import NewProducts from '@/components/NewProducts'
import Newsletter from '@/components/Newsletter'
import PerfumeAccessorySection from '@/components/PerfumeAccessorySection'
import ProductsSection from '@/components/ProductsSection'
import SkinHairSection from '@/components/SkinHairSection'
import SpecialOffers from '@/components/SpecialOffers'
import React from 'react'

function page() {
  return (
    <div>
      <Hero/>
      <Categories/>
      <Brands/>
      <ProductsSection/>
      <SpecialOffers/>
      <NewProducts/>
      <SkinHairSection/>
      <PerfumeAccessorySection/>
      <CustomerReviews />
      <Benefits/>
      <BeautyBlog/>
      <Newsletter/>
    </div>
  )
}

export default page
