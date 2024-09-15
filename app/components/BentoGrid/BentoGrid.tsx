import createPostImg from '@/public/assets/images/illustration-create-post.webp';
import aiContentImg from '@/public/assets/images/illustration-ai-content.webp';
import fiveStarsImg from '@/public/assets/images/illustration-five-stars.webp';
import schedulePostImg from '@/public/assets/images/illustration-schedule-posts.webp';
import multiplePlatformsImg from '@/public/assets/images/illustration-multiple-platforms.webp';
import consistentSchedule from '@/public/assets/images/illustration-consistent-schedule.webp';
import audienceGrowthImg from '@/public/assets/images/illustration-audience-growth.webp';
import growFollowersImg from '@/public/assets/images/illustration-grow-followers.webp';
import Image from 'next/image';

function BentoGrid() {
  return (
    <section className="grid grid-cols-8 gap-8">
      {/* Create post */}
      <div className="col-span-8 row-start-7 flex flex-col gap-6 rounded-lg bg-bento-yellow100 p-8 md:col-span-4 md:px-6 md:py-[75px] lg:col-span-4 lg:px-6 lg:py-[75px] xl:col-span-2 xl:row-span-3 xl:px-8 xl:py-[78px] 2xl:col-span-2 2xl:row-span-3 2xl:px-8 2xl:py-[78px]">
        <h1 className="flex-1 text-lg font-medium md:text-[36px] md:leading-[30px] lg:text-[36px] lg:leading-[30px] xl:text-xl 2xl:text-xl">
          Create and schedule content{' '}
          <i className="inline-block text-bento-purple500">quicker.</i>
        </h1>
        <div className="flex-1">
          <Image src={createPostImg} alt="create post button image" />
        </div>
      </div>

      {/* Social media */}
      <div className="col-span-8 row-start-1 flex flex-col items-center justify-center gap-6 rounded-lg bg-bento-purple500 px-8 py-10 text-center md:col-span-8 md:row-start-1 md:px-[76px] md:py-[72px] lg:col-span-8 lg:row-start-1 lg:px-[76px] lg:py-[72px] xl:col-span-4 xl:row-span-2 xl:px-8 xl:py-[62px] 2xl:col-span-4 2xl:row-span-2 2xl:px-8 2xl:py-[62px]">
        <h1 className="text-[46px] font-medium leading-[42px] text-bento-whitebento md:text-[54px] md:leading-[48px] lg:text-[54px] lg:leading-[48px] xl:text-2xl 2xl:text-2xl">
          Social Media&nbsp;
          <span className="inline-block text-bento-yellow500">10x</span>
          &nbsp;
          <i className="inline-block">Faster</i> with AI
        </h1>

        <div className="flex flex-col gap-2">
          <Image
            width={192}
            height={32}
            src={fiveStarsImg}
            alt="five stars image"
            className="mx-auto object-cover"
          />
          <p className="text-base text-bento-whitebento">
            Over 4,000 5-star reviews
          </p>
        </div>
      </div>

      {/* Schedule to social media */}
      <div className="col-span-8 row-start-4 flex flex-col gap-6 overflow-hidden rounded-lg bg-bento-purple100 sm:px-[17px] sm:py-[32px] sm:text-center md:col-span-8 md:row-start-3 md:items-center md:justify-center md:py-[32px] md:text-center lg:col-span-8 lg:row-start-3 lg:items-center lg:justify-center lg:px-[17px] lg:py-[32px] lg:text-center xl:col-span-2 xl:row-span-4 xl:px-8 xl:py-[50px] 2xl:col-span-2 2xl:row-span-4 2xl:px-8 2xl:py-[50px]">
        <h2 className="text-[26px] font-medium leading-6 text-bento-blackbento md:text-[28px] lg:text-lg xl:text-lg 2xl:text-lg">
          Schedule to social media.
        </h2>
        <div className="md:h-[318px] md:w-[357px] lg:h-[318px] lg:w-[357px] xl:h-[318px] xl:w-[357px] 2xl:h-[318px] 2xl:w-[357px]">
          <Image
            className="h-full w-full"
            src={schedulePostImg}
            alt="schedule to social media image"
          />
        </div>

        <p className="flex-1 text-base text-bento-blackbento md:max-w-[360px] lg:max-w-[360px]">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>

      {/* AI content */}
      <div className="col-span-8 row-start-8 flex flex-col gap-6 rounded-lg bg-bento-yellow500 p-6 md:col-span-4 md:row-start-7 lg:col-span-4 lg:row-start-7 xl:col-span-2 xl:col-start-1 xl:row-span-3 xl:gap-[55px] 2xl:col-span-2 2xl:col-start-1 2xl:row-span-3 2xl:gap-[55px]">
        <h1 className="flex-1 text-lg font-medium md:text-[36px] md:leading-[30px] lg:text-[36px] lg:leading-[30px] xl:text-xl 2xl:text-xl">
          Write your content using AI.
        </h1>
        <div className="flex-1">
          <Image
            className="h-full w-full object-cover"
            src={aiContentImg}
            alt="ai content image"
          />
        </div>
      </div>

      {/* Multiple platforms */}
      <div className="col-span-8 row-start-2 flex w-full flex-col gap-4 overflow-hidden rounded-lg bg-bento-whitebento p-4 md:col-span-4 md:row-start-2 md:gap-[54px] md:p-6 lg:col-span-4 lg:row-start-2 lg:gap-5 lg:p-6 xl:col-span-2 xl:col-start-3 xl:row-span-2 xl:row-start-3 xl:gap-5 xl:p-6 2xl:col-span-2 2xl:col-start-3 2xl:row-span-2 2xl:row-start-3 2xl:gap-5 2xl:p-6">
        <div className="h-[66px] w-[316px] flex-1">
          <Image src={multiplePlatformsImg} alt="multiple platforms image" />
        </div>
        <h2 className="flex-1 text-[26px] font-medium leading-6 text-bento-blackbento md:text-[28px] md:leading-[26px] lg:text-lg lg:leading-[26px] xl:text-lg 2xl:text-lg">
          Manage multiple accounts and platforms.
        </h2>
      </div>

      {/* Consistent Schedule */}
      <div className="col-span-8 row-start-3 flex-col gap-4 overflow-hidden rounded-lg bg-bento-yellow500 p-4 md:col-span-4 md:row-start-2 md:p-6 lg:col-span-4 lg:row-start-2 lg:p-6 xl:col-span-2 xl:col-start-5 xl:row-span-2 xl:row-start-3 xl:p-6 2xl:col-span-2 2xl:col-start-5 2xl:row-span-2 2xl:row-start-3 2xl:p-6">
        <h2 className="flex-1 text-[26px] font-medium leading-6 text-bento-blackbento md:text-[28px] md:leading-[26px] lg:text-lg lg:leading-[26px] xl:text-lg 2xl:text-lg">
          Maintain a consistent posting schedule.
        </h2>
        <div className="relative h-[157px] w-[208px] flex-1 sm:-bottom-4 md:-bottom-6 lg:-bottom-6 xl:-bottom-24 2xl:-bottom-24">
          <Image
            className="h-full w-full object-cover"
            src={consistentSchedule}
            alt="consistent schedule image"
          />
        </div>
      </div>

      {/* Audience growth */}
      <div className="col-span-8 row-start-6 flex flex-col rounded-lg bg-bento-whitebento p-6 sm:gap-6 md:col-span-8 md:row-start-5 md:flex-row md:justify-between lg:col-span-8 lg:row-start-5 lg:flex-row lg:items-center lg:justify-between xl:col-span-2 xl:col-start-3 xl:row-span-2 xl:row-start-5 xl:gap-[38px] 2xl:col-span-2 2xl:col-start-3 2xl:row-span-2 2xl:row-start-5 2xl:gap-[38px]">
        <div className="flex flex-1 flex-col gap-[15px]">
          <h3 className="text-[46px] font-medium text-bento-blackbento md:text-[54px] lg:text-2xl xl:text-2xl 2xl:text-2xl">
            &gt;56%
          </h3>
          <p className="text-base text-bento-blackbento">
            faster audience growth
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={audienceGrowthImg}
            className="sm:h-[66px] sm:w-[178px]"
            alt="audience growth image"
          />
        </div>
      </div>

      {/* Grow followers */}
      <div className="col-span-8 row-start-5 flex flex-col items-center justify-center gap-10 rounded-lg bg-bento-purple500 px-[57px] py-6 sm:text-center md:col-span-8 md:row-start-4 md:flex-row md:px-[81px] md:py-[22px] lg:col-span-8 lg:row-start-4 lg:flex-row lg:px-[81px] lg:py-[22px] xl:col-span-4 xl:col-start-5 xl:row-span-2 xl:row-start-5 xl:flex-row xl:gap-[11px] xl:px-6 xl:py-[22px] 2xl:col-span-4 2xl:col-start-5 2xl:row-span-2 2xl:row-start-5 2xl:flex-row 2xl:gap-[11px] 2xl:px-6 2xl:py-[22px]">
        <div className="flex-1">
          <Image
            className="h-full w-full object-cover"
            src={growFollowersImg}
            alt="grow followers image"
          />
        </div>
        <h3 className="flex-1 text-lg font-medium text-bento-whitebento md:text-[36px] md:leading-[30px] lg:text-[36px] lg:leading-[30px] xl:text-xl 2xl:text-xl">
          Grow followers with non-stop content.
        </h3>
      </div>
    </section>
  );
}

export default BentoGrid;
