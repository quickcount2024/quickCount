const express = require("express");
const cors = require("cors");
const axios = require('axios');
const app = express();
const PORT = 5000;
var bodyParser = require("body-parser");
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
const server = require("http").createServer(app);
server.listen(PORT);

const hitungPersentase = (nilaiDicari, total) => {
    const persentase = (nilaiDicari / total) * 100;
    return parseFloat(persentase.toFixed(2));
  };

app.get("/", async (req, res) => {
    try {
        const response = await axios.get('https://kf.kobotoolbox.org/api/v2/assets/a3xiJCPGKXhs5oy6ocrYXB/data.json');
        let paslon1 = 0;
        let paslon2 = 0;
        let paslon3 = 0;
        let total = 0;

        response.data.results.forEach(x => {
            const paslon1Temp = parseInt(x['jumlah_data_pemilih/per_paslon_1'], 10);
            const paslon2Temp = parseInt(x['jumlah_data_pemilih/per_paslon_2'], 10);
            const paslon3Temp = parseInt(x['jumlah_data_pemilih/per_paslon_3'], 10);
            const total_paslon = paslon1Temp + paslon2Temp + paslon3Temp;

            if (total_paslon <= 300) {
                paslon1 += paslon1Temp;
                paslon2 += paslon2Temp;
                paslon3 += paslon3Temp;
              }
        });
        
        total = paslon1 + paslon2 + paslon3;

        res.status(200).json({
            status: 200,
            data: [{
                name: 'Anies Baswedan-Muhaimin Iskandar',
                persen: `${hitungPersentase(paslon1, total)}%`,
                // total: paslon1
            },{
                name: 'Prabowo Subianto-Gibran Rakabuming Raka',
                persen: `${hitungPersentase(paslon2, total)}%`,
                // total: paslon2
            },{
                name: 'Ganjar Pranowo-Mahfud Md',
                persen: `${hitungPersentase(paslon3, total)}%`,
                // total: paslon3
            },
            // {
            //     name: 'Total Suara',
            //     persen: `${hitungPersentase(response.data.results.length, 1400)}%`,
            //     total: response.data.results.length
            // }
        ]});
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).send('Server error');
    }
});

app.get("/caleg", async (req, res) => {
    try {
        const response = await axios.get('https://kf.kobotoolbox.org/api/v2/assets/aT6sTvRwH39CH55VAqBh39/data.json');

        let PKBTemp = 0;
        let GerindaTemp = 0;
        let PDIPTemp = 0;
        let GolkarTemp = 0;
        let NasdemTemp = 0;
        let BuruhTemp = 0;
        let GeloraTemp = 0;
        let PKSTemp = 0;
        let PKNTemp = 0;
        let HanuraTemp = 0;
        let GarudaTemp = 0;
        let PANTemp = 0;
        let PBBTemp = 0;
        let DemokratTemp = 0;
        let PSITemp = 0;
        let PerindoTemp = 0;
        let PPPTemp = 0;
        let UmmatTemp = 0;
        let TotalTemp = 0;

        response.data.results.forEach(x => {
            const PKBRow = parseInt(x['jumlah_data_pemilih/jumlah_pkb'], 10);
            const GerindaRow = parseInt(x['jumlah_data_pemilih/jumlah_gerindra'], 10);
            const PDIPRow = parseInt(x['jumlah_data_pemilih/jumlah_pdip'], 10);
            const GolkarRow = parseInt(x['jumlah_data_pemilih/jumlah_golkar'], 10);
            const NasdemRow = parseInt(x['jumlah_data_pemilih/jumlah_nasdem'], 10);
            const BuruhRow = parseInt(x['jumlah_data_pemilih/jumlah_buruh'], 10);
            const GeloraRow = parseInt(x['jumlah_data_pemilih/jumlah_gelora'], 10);
            const PKSRow = parseInt(x['jumlah_data_pemilih/jumlah_pks'], 10);
            const PKNRow = parseInt(x['jumlah_data_pemilih/jumlah_nusantara'], 10);
            const HanuraRow = parseInt(x['jumlah_data_pemilih/jumlah_hanura'], 10);
            const GarudaRow = parseInt(x['jumlah_data_pemilih/jumlah_indonesia'], 10);
            const PANRow = parseInt(x['jumlah_data_pemilih/jumlah_pan'], 10);
            const PBBRow = parseInt(x['jumlah_data_pemilih/jumlah_pbb'], 10);
            const DemokratRow = parseInt(x['jumlah_data_pemilih/jumlah_demokrat'], 10);
            const PSIRow = parseInt(x['jumlah_data_pemilih/jumlah_psi'], 10);
            const PerinndoRow = parseInt(x['jumlah_data_pemilih/jumlah_perindo'], 10);
            const PPPRow = parseInt(x['jumlah_data_pemilih/jumlah_ppp'], 10);
            const UmmatRow = parseInt(x['jumlah_data_pemilih/jumlah_ummat'], 10);
            const total_paslon =
                PKBRow +
                GerindaRow +
                PDIPRow +
                GolkarRow +
                NasdemRow +
                BuruhRow +
                GeloraRow +
                PKSRow +
                PKNRow +
                HanuraRow +
                GarudaRow +
                PANRow +
                PBBRow +
                DemokratRow +
                PSIRow +
                PerinndoRow +
                PPPRow +
                UmmatRow;
                
            if(isNaN(TotalTemp) === false){
                TotalTemp += total_paslon; 
            }

            if (total_paslon <= 300) {
                PKBTemp += PKBRow;
                GerindaTemp += GerindaRow;
                PDIPTemp += PDIPRow;
                GolkarTemp += GolkarRow;
                NasdemTemp += NasdemRow;
                BuruhTemp += BuruhRow;
                GeloraTemp += GeloraRow;
                PKSTemp += PKSRow;
                PKNTemp += PKNRow;
                HanuraTemp += HanuraRow;
                GarudaTemp += GarudaRow;
                PANTemp += PANRow;
                PBBTemp += PBBRow;
                DemokratTemp += DemokratRow;
                PSITemp += PSIRow;
                PerindoTemp += PerinndoRow;
                PPPTemp += PPPRow;
                UmmatTemp += UmmatRow;
              } 

        })
        console.log(PKBTemp, TotalTemp)
        res.status(200).json({
            status: 200,
            data: [{
                name: 'PKB',
                persen: `${hitungPersentase(PKBTemp, TotalTemp)}%`,
                total: PKBTemp
            },
            {
                name: 'Gerindra',
                persen: `${hitungPersentase(GerindaTemp, TotalTemp)}%`,
                total: GerindaTemp
            },
            {
                name: 'PDIP',
                persen: `${hitungPersentase(PDIPTemp, TotalTemp)}%`,
                total: PDIPTemp
            },
            {
                name: 'Golkar',
                persen: `${hitungPersentase(GolkarTemp, TotalTemp)}%`,
                total: GolkarTemp
            },
            {
                name: 'Nasdem',
                persen: `${hitungPersentase(NasdemTemp, TotalTemp)}%`,
                total: NasdemTemp
            },
            {
                name: 'Buruh',
                persen: `${hitungPersentase(BuruhTemp, TotalTemp)}%`,
                total: BuruhTemp
            },
            {
                name: 'Gelora',
                persen: `${hitungPersentase(GeloraTemp, TotalTemp)}%`,
                total: GeloraTemp
            },
            {
                name: 'PKS',
                persen: `${hitungPersentase(PKSTemp, TotalTemp)}%`,
                total: PKSTemp
            },
            {
                name: 'PKN',
                persen: `${hitungPersentase(PKNTemp, TotalTemp)}%`,
                total: PKNTemp
            },
            {
                name: 'Hanura',
                persen: `${hitungPersentase(HanuraTemp, TotalTemp)}%`,
                total: HanuraTemp
            },
            {
                name: 'Garuda',
                persen: `${hitungPersentase(GarudaTemp, TotalTemp)}%`,
                total: GarudaTemp
            },
            {
                name: 'PAN',
                persen: `${hitungPersentase(PANTemp, TotalTemp)}%`,
                total: PANTemp
            },
            {
                name: 'PBB',
                persen: `${hitungPersentase(PBBTemp, TotalTemp)}%`,
                total: PBBTemp
            },
            {
                name: 'Demokrat',
                persen: `${hitungPersentase(DemokratTemp, TotalTemp)}%`,
                total: DemokratTemp
            },
            {
                name: 'PSI',
                persen: `${hitungPersentase(PSITemp, TotalTemp)}%`,
                total: PSITemp
            },
            {
                name: 'Perindo',
                persen: `${hitungPersentase(PerindoTemp, TotalTemp)}%`,
                total: PerindoTemp
            },
            {
                name: 'PPP',
                persen: `${hitungPersentase(PPPTemp, TotalTemp)}%`,
                total: PPPTemp
            },
            {
                name: 'Ummat',
                persen: `${hitungPersentase(UmmatTemp, TotalTemp)}%`,
                total: UmmatTemp
            },{
                name: 'Total Suara',
                persen: `${hitungPersentase(response.data.results.length, 1400)}%`,
                total: response.data.results.length
            }
            ],
            });
        } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).send('Server error');
    }
});

app.post("/", async (req, res) => {
    try {
        const response = await axios.get('https://kf.kobotoolbox.org/api/v2/assets/a3xiJCPGKXhs5oy6ocrYXB/data.json');
        res.status(200).json({
            status: 200,
            data: response.data,
            });
        } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).send('Server error');
    }
});

app.post("/caleg", async (req, res) => {
    try {
        const response = await axios.get('https://kf.kobotoolbox.org/api/v2/assets/aT6sTvRwH39CH55VAqBh39/data.json');
        res.status(200).json({
            status: 200,
            data: response.data,
            });
        } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).send('Server error');
    }
});
