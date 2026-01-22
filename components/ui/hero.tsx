'use client';
import { styled } from '@mui/material/styles';
import Image from "next/image";
import Typography from '@mui/material/Typography'; 
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { YouTubeEmbed } from '@next/third-parties/google'
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import { Button } from '@/components/ui/button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ResponsiveGrid() {
  return (
      <div className="flex flex-col gap-16 px-8 py-24 text-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="mb-0 text-balance font-medium text-6xl ">
            The Equity Blueprint: 
          </h1>
          <p className="mt-0 mb-0 text-balance text-lg text-muted-foreground">
            Actionable Strategies for Empowering Communities and Closing Opportunity Gaps
          </p>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
              <Grid size="grow" container justifyContent="center" alignItems="center">
                <Image src="/book-mockup1.png" alt='Mockup 1' width={350} height={350}/>
              </Grid>
              <Grid size={4}>
                <Typography align="left" fontSize="1.4rem">
                  "This book is a hands-on guide for leaders, 
                  practitioners, and changemakers who want to close opportunity gaps and build more equitable futures. Drawing on three decades of experience 
                  in economic development and community investment, Dr. Eloisa Klementich shares proven strategies, practical insights, and case studies from 
                  the front lines of equity work."
                </Typography>
              </Grid>
              <Grid size="grow" container justifyContent="center" alignItems="center">
                <Image src="/book-mockup3.png" alt='Mockup 3' width={350} height={350}/>
              </Grid>
            </Grid>
          </Box>
        </div>

        <section className="bg-[#293790]">
          <div className="w-full">
            <div className="mt-6 flex space-x-4 justify-center items-center p-10">
              <button className="bg-[#48A9A6] hover:bg-[#70877F] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                BUY THE BOOK
              </button>
              <button className="bg-white hover:bg-gray-200 text-[#48A9A6] font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 border border-[#48A9A6]">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#F1F2F6]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-20">
              
              {/* Left Column: Text Content and Buttons */}
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="mb-0 text-balance font-medium text-6xl">
                  Take Risks. Govern like an Entrepreneur.
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Presented by Dr. Eloisa Klementich, this TEDxTalk highlights the need for government to act more entrepreneurial and adpot the practice into everyday life. Innovation does not only occur for product creation but it also supports how to lead and approach real-world development challenges. For all of the creativity needed to change, an expectancy of change will always be consistent.
                </p>
              </div>
              
              {/* Right Column: Video */}
              <div className="md:w-1/2 mt-10 md:mt-0">
                <YouTubeEmbed videoid="-aLrEGHbIx8" height={400} width={620} params="controls=0&autoplay=1" />
              </div>
            </div>
          </div>
          <hr style={{ color: '#48A9A6', backgroundColor: '#48A9A6', width: '50%', height: 2, border: 'none', margin: 'auto' }} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-20">
              
              {/* Left Column: Image */}
              <div className="md:w-1/2 mt-10 md:mt-0">
                <Image src="/ajc_oped.jpg" alt="Moving Overlay" height={400} width={620} />
              </div>
              
              {/* Right Column: Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="mb-0 text-balance font-medium text-6xl">
                  We must invest in the 'beloved community' to continue to grow Georgia
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  <strong>AJC: Opinion</strong> If we redouble our efforts to leverage the government’s investments in disinvested communities, we can catalyze wealth creation for families.
                </p>
                
                <div className="mt-6 flex space-x-4">
                  <a href="https://www.ajc.com/opinion/opinion-we-must-invest-in-the-beloved-community-to-continue-to-grow-georgia/BYFR63WGUNB55NOSNTBITAJ73E/" target="_blank">
                    <button className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition duration-150 ease-in-out">
                      Learn More
                    </button>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
  );
}



// import {
//   SiApple,
//   SiFacebook,
//   SiGithub,
//   SiGoogle,
//   SiInstagram,
//   SiX,
//   SiYoutube,
// } from '@icons-pack/react-simple-icons';
// import {
//   Announcement,
//   AnnouncementTag,
//   AnnouncementTitle,
// } from '@/components/ui/shadcn-io/announcement';
// import {
//   Marquee,
//   MarqueeContent,
//   MarqueeFade,
//   MarqueeItem,
// } from '@/components/ui/shadcn-io/marquee';
// import { Button } from '@/components/ui/button';
// import {
//   VideoPlayer,
//   VideoPlayerContent,
//   VideoPlayerControlBar,
//   VideoPlayerMuteButton,
//   VideoPlayerPlayButton,
//   VideoPlayerSeekBackwardButton,
//   VideoPlayerSeekForwardButton,
//   VideoPlayerTimeDisplay,
//   VideoPlayerTimeRange,
//   VideoPlayerVolumeRange,
// } from '@/components/ui/shadcn-io/video-player';
// import Link from 'next/link';
// const logos = [
//   {
//     name: 'GitHub',
//     icon: SiGithub,
//     url: 'https://github.com',
//   },
//   {
//     name: 'Facebook',
//     icon: SiFacebook,
//     url: 'https://facebook.com',
//   },
//   {
//     name: 'Google',
//     icon: SiGoogle,
//     url: 'https://google.com',
//   },
//   {
//     name: 'X',
//     icon: SiX,
//     url: 'https://x.com',
//   },
//   {
//     name: 'Apple',
//     icon: SiApple,
//     url: 'https://apple.com',
//   },
//   {
//     name: 'Instagram',
//     icon: SiInstagram,
//     url: 'https://instagram.com',
//   },
//   {
//     name: 'YouTube',
//     icon: SiYoutube,
//     url: 'https://youtube.com',
//   },
// ];
// const HeroExample = () => (
//   <div className="flex flex-col gap-16 px-8 py-24 text-center">
//     <div className="flex flex-col items-center justify-center gap-8">
//       <Link href="#">
//         <Announcement>
//           <AnnouncementTag>Latest</AnnouncementTag>
//           <AnnouncementTitle>Introducing blocks by Kibo UI</AnnouncementTitle>
//         </Announcement>
//       </Link>
//       <h1 className="mb-0 text-balance font-medium text-6xl md:text-7xl xl:text-[5.25rem]">
//         The best way to build your website
//       </h1>
//       <p className="mt-0 mb-0 text-balance text-lg text-muted-foreground">
//         Kibo UI blocks are a new way to build your website. They are a
//         collection of pre-built components that you can use to build your
//         website.
//       </p>
//       <div className="flex items-center gap-2">
//         <Button asChild>
//           <Link href="#">Get started</Link>
//         </Button>
//         <Button asChild variant="outline">
//           <Link className="no-underline" href="#">
//             Learn more
//           </Link>
//         </Button>
//       </div>
//     </div>
//     <section className="flex flex-col items-center justify-center gap-8 rounded-xl bg-secondary py-8 pb-18">
//       <p className="mb-0 text-balance font-medium text-muted-foreground">
//         Trusted by developers from leading companies
//       </p>
//       <div className="flex size-full items-center justify-center">
//         <Marquee>
//           <MarqueeFade className="from-secondary" side="left" />
//           <MarqueeFade className="from-secondary" side="right" />
//           <MarqueeContent pauseOnHover={false}>
//             {logos.map((logo) => (
//               <MarqueeItem className="mx-16 size-12" key={logo.name}>
//                 <Link href={logo.url}>
//                   <logo.icon className="size-full" />
//                 </Link>
//               </MarqueeItem>
//             ))}
//           </MarqueeContent>
//         </Marquee>
//       </div>
//     </section>
//     <VideoPlayer className="overflow-hidden rounded-lg border">
//       <VideoPlayerContent
//         crossOrigin=""
//         muted
//         preload="auto"
//         slot="media"
//         src=".\WhatsNextATLSpeaker-EloisaKlementich.mp4"
//         loop
//       />
//       <VideoPlayerControlBar>
//         <VideoPlayerPlayButton />
//         <VideoPlayerSeekBackwardButton />
//         <VideoPlayerSeekForwardButton />
//         <VideoPlayerTimeRange />
//         <VideoPlayerTimeDisplay showDuration />
//         <VideoPlayerMuteButton />
//         <VideoPlayerVolumeRange />
//       </VideoPlayerControlBar>
//     </VideoPlayer>
//   </div>
// );
// export default HeroExample;