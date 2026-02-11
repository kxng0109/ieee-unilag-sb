import Image from 'next/image'
const ImageArray: string[]= ["2","5","6","7","8","9"]
const ArrayText: string[]= [
 "The IEEE University of Lagos Student Branch is a vibrant community of passionate engineering and technology students committed to advancing innovation, fostering professional development, and creating positive impact through technology.",
 "As part of the world's largest technical professional organization, we provide our members with access to cutting-edge research, industry connections, and opportunities to collaborate on projects that solve real-world challenges.",
 "From robotics competitions to AI workshops, hackathons to industry networking events, IEEE UNILAG serves as the bridge between academic excellence and professional success, preparing the next generation of Nigerian tech leaders."
]

const WWA = () => {
  return (
    <div className='flex flex-col xl:flex-row justify-between bg-[#F5F8FF] min-h-[637px] items-center px-12 md:px-20 py-30 gap-0'>
      <div className={`font-text text-[#475569] xl:shrink-0 xl:w-[607px]`}>
        <div className='text-[#00629B] text-4xl md:text-5xl font-bold text-center lg:text-left'>
          Who We Are
        </div>
        {ArrayText.map((item, index) => {
          return (
            <div key={index} className='my-6 md:my-8 text-[18px] md:text-[20px] text-center lg:text-left'>
              {item}
            </div>
          )
        })}
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 w-fit shrink-0'>
        {ImageArray.map((image) => {
          return (
            <Image
              key={image}
              src={`/image-${image}.png`}
              alt="IEEE UNILAG"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-auto min-w-[120px] max-w-[180px] mx-auto"
            />
          )
        })}
      </div>
    </div>
  )
}

export default WWA