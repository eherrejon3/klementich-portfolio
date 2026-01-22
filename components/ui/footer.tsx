'use client'
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3, // Padding top/bottom
        mt: 'auto', // Pushes footer to bottom if content is short
        backgroundColor: '#48A9A6', // MUI theme background
        borderTop: '1px solid',
        borderColor: 'divider', // Subtle separator
      }}
      className="bg-[#F68E5F] dark:bg-[#F68E5F] text-gray-600 dark:text-gray-300" // Tailwind classes for base
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}> {/* Use flex-start for column, center for row */}
            <div className="container mx-auto px-4 pt-16 flex flex-col md:flex-row items-center">
                {/* Left Column*/}
                <div style={{ textAlign: 'right' }} className="md:w-1/2 lg:pr-10 mb-10 md:mb-0">
                    <Typography variant="h5" color="#293790" className="font-bold"> Links </Typography>
                    <hr style={{ color: '#293790', backgroundColor: '#293790', width: '35%', height: 1, border: 'none', display: 'block', margin: '0 auto', float: 'right' }}/>
                </div>
                {/* Right Column */}
                <div style={{ verticalAlign: 'top' }} className="md:w-1/2">
                    <Typography variant="h5" color="#293790" className="font-bold"> Contact </Typography>
                    <hr style={{ color: '#293790', backgroundColor: '#293790', width: '35%', height: 1, border: 'none' }}/>
                </div>
            </div>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}> {/* Use flex-start for column, center for row */}
            <div className="container mx-auto px-4 pb-16 flex flex-col md:flex-row items-center">
                {/* Left Column*/}
                <div style={{ textAlign: 'right' }} className="md:w-1/2 lg:pr-10 mb-10 md:mb-0">
                    <div className="flex flex-col space-y-4">
                        <Link href="/#" color="#293790" className="hover:text-white transition-colors" style={{ fontSize: '1.2rem' }}> About </Link>
                        <Link href="/#" color="#293790" className="hover:text-white transition-colors" style={{ fontSize: '1.2rem' }}> Buy Online </Link>
                        <Link href="https://www.investatlanta.com/" target="_blank" color="#293790" className="hover:text-white transition-colors" style={{ fontSize: '1.2rem' }}> Invest Atlanta </Link>
                    </div>
                </div>
                {/* Right Column */}
                <div style={{ verticalAlign: 'top' }} className="md:w-1/2">
                    <div className="flex space-x-4">
                        <button className="bg-white text-[#293790] border border-[#293790] px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
                        <a href="#">Learn More</a>
                        </button>
                    </div>
                </div>
            </div>
        </Box>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="#293790">
            &copy; Copyright {new Date().getFullYear()} Dr. Eloisa Klementich. All rights reserved. 
          </Typography>
          <Typography variant="body2" color="#F1F2F6">
            site by eherrejon3
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
