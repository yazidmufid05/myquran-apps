import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack  } from '@mui/material';
import axios from 'axios';

const Main = () => {

    const [surat, setSurat] = useState([]);

    const getAPI = async() => {
      const response = await axios("https://equran.id/api/v2/surat")
      setSurat(response.data.data);
    };
    
    useEffect(() =>{
        getAPI()
    }, []);

    return (
        <>
             <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Kanit:ital,wght@1,500&display=swap" rel="stylesheet" />
            <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="p"
              fontSize="55px"
              fontWeight="600"
              letterSpacing="1px"
              align="center"
              fontFamily="Kanit"
              color="text.primary"
              gutterBottom
            >
              MyQuran Apps
            </Typography>
            <Typography 
            variant="h5" 
            fontSize="20px"
            align="center" 
            letterSpacing="1.3px"
            color="text.secondary" 
            paragraph>
             Membaca Al-Quran dengan mudah kapan saja dan dimana saja
            </Typography>
          </Container>
        </Box>
        <Content data={surat} />
        
      </main>
        </>
    );
}

const Content = ({data}) => {

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((data) => (
              <Grid item key={data.nomor} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                    textAlign="center"
                    gutterBottom 
                    variant="h5" 
                    component="h2"
                    >
                      {data.nama}
                    </Typography>
                    <Typography textAlign="center">
                      {data.namaLatin}
                    </Typography>
                    <Stack 
                    mt="15px" 
                    justifyContent="center"
                    direction='row'>

                        <Typography 
                        padding='5px' 
                        fontSize='10px' 
                        margin='4px'
                        borderRadius="6px"
                        letterSpacing='1.5px'
                        bgcolor='green'
                        color='white'
                        >
                            {data.arti}
                            </Typography>

                        <Typography
                          padding='5px' 
                          fontSize='10px' 
                          margin='4px'
                          textAlign='center'
                          borderRadius="6px"
                          letterSpacing='1.5px'
                          bgcolor='teal'
                          color='white'
                          >
                            {data.tempatTurun}
                            </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

    )
}

export default Main;
