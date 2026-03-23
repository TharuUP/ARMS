// --- DATA: HOSPITAL NETWORK ---
const HOSPITAL_NETWORK = [

    // --- COLOMBO & SUBURBS ---
    { name: "Nawaloka Hospital", city: "Colombo", country: "sri-lanka", address: "23, Deshamanya H.K Dharmadasa Mawatha", contact: "Ms. AYONIE / Billing Team", email: "inpt.billing@nawaloka.com", services: "IPD + OPD", phone: "011-5577111" },
    { name: "Hemas Hospital", city: "Wattala", country: "sri-lanka", address: "389 Negombo-Colombo Main Rd", contact: "DR. Lasantha (MD)", email: "georgina@hemashospitals.com", services: "IPD + OPD", phone: "011-7888888" },
    { name: "Hemas Hospital", city: "Thalawathugoda", country: "sri-lanka", address: "647/2a, Pannipitiya Road", contact: "Mr. Ramila / Ms. Roshitta", email: "roshitta.twg@hemashospitals.com", services: "IPD + OPD", phone: "077-8304191" },
    { name: "Durdans Hospital", city: "Colombo", country: "sri-lanka", address: "3 Alfred Place, Colombo 03", contact: "Ms. Champa Perera", email: "champa@durdans.com", services: "IPD + OPD", phone: "011-2140666" },
    { name: "Lanka Hospital", city: "Colombo", country: "sri-lanka", address: "578 Elvitigala Mawatha", contact: "Ms. Pavithra Jayakody", email: "pavithras@lankahospitals.com", services: "IPD + OPD", phone: "011-5431000" },
    { name: "Asiri Central Hospital", city: "Colombo", country: "sri-lanka", address: "No. 114, Norris Canal Rd", contact: "Ms. Hiroshika / Mr. Chinthaka", email: "chibilling@asiri.lk", services: "IPD + OPD", phone: "011-4665500" },
    { name: "Asiri Medical Hospital", city: "Colombo", country: "sri-lanka", address: "181, Kirula Road", contact: "Ms. Thisaru / Dr. Samanthi", email: "ahlbilling@asiri.lk", services: "IPD + OPD", phone: "011-4523300" },
    { name: "Asiri Surgical Hospital", city: "Colombo", country: "sri-lanka", address: "21 Kirimandala Mawatha", contact: "Mr. Thanuja / Ms. Dilshani", email: "ashbilling@asiri.lk", services: "IPD + OPD", phone: "011-4524400" },
    { name: "Kings Hospital", city: "Colombo", country: "sri-lanka", address: "18/A Evergreen Park Rd", contact: "Dr. Shafeek", email: "billing@kingshospitals.com", services: "IPD + OPD", phone: "071-4802922" },
    { name: "Ninewells Hospital", city: "Colombo", country: "sri-lanka", address: "55/1 Kirimandala Mawatha", contact: "Billing Team", email: "billing@ninewellshospital.lk", services: "IPD + OPD", phone: "011-4520999" },
    { name: "Royal Hospital", city: "Colombo", country: "sri-lanka", address: "No 62 W.A. Silva Mawatha", contact: "Billing Dept", email: "accounts@royalhospital.com", services: "IPD + OPD", phone: "011-4444580" },
    { name: "Medihelp Hospitals", city: "Colombo/Piliyandala", country: "sri-lanka", address: "No 100, Colombo Road", contact: "Nishantha Jayamanna (CEO)", email: "nishantha@medihelp.lk", services: "OPD", phone: "077-2613671" },
    { name: "Colombo Clinical Life", city: "Colombo", country: "sri-lanka", address: "No 33 Deal Place A", contact: "Devin Sarasinghe", email: "life@life.lk", services: "OPD", phone: "074-1200300" },

    // --- WESTERN & NORTH WESTERN ---
    { name: "Nawaloka Hospital", city: "Negombo", country: "sri-lanka", address: "No. 169, Colombo Road", contact: "Mr. Sachinthana", email: "billing.neg@nawaloka.com", services: "IPD + OPD", phone: "031-5577111" },
    { name: "Ave Maria Hospital", city: "Negombo", country: "sri-lanka", address: "Ave Maria Rd", contact: "Ms. Sherine", email: "avemariang@gmail.com", services: "IPD + OPD", phone: "031-2222127" },
    { name: "New Phillip Hospital", city: "Kalutara", country: "sri-lanka", address: "No: 225, Galle Rd", contact: "Mr. Nuwan / Ms. Navini", email: "billing@philiphospitals.com", services: "IPD + OPD", phone: "034-2222888" },
    { name: "Arogya Hospital", city: "Gampaha", country: "sri-lanka", address: "250 Miriswatta Rd", contact: "Billing Team", email: "arogya.hospital@dialognet.lk", services: "IPD + OPD", phone: "033-2224592" },
    { name: "Miracle Health Hospital", city: "Kurunegala", country: "sri-lanka", address: "223, Dambulla road", contact: "Mr. Chamara Rajapaksha", email: "chamara@miraclehospitals.lk", services: "IPD + OPD", phone: "037-7390350" },
    { name: "Aswath Hospital", city: "Puttalam/Kalpitiya", country: "sri-lanka", address: "Periyakudiyirrupu", contact: "Dr. Thananjeyan", email: "drsthananjeyan@gmail.com", services: "OPD", phone: "032-4928926" },

    // --- CENTRAL REGION ---
    { name: "Suwasevana Hospital", city: "Kandy", country: "sri-lanka", address: "No: 532, Peradeniya Road", contact: "Ms. Darshini / Ms. Chandani", email: "finance@suwasevana.lk", services: "IPD + OPD", phone: "081-4953694" },
    { name: "Asiri Hospital", city: "Kandy", country: "sri-lanka", address: "907 Peradeniya Rd", contact: "Billing Department", email: "shanika.dissanayaka@asiri.lk", services: "IPD + OPD", phone: "081-4528800" },
    { name: "Lakeside Adventist", city: "Kandy", country: "sri-lanka", address: "40 Sangaraja Mawatha", contact: "Mrs. Neela Joseph", email: "neelajoseph777@gmail.com", services: "IPD + OPD", phone: "081-2223466" },
    { name: "Mobile Medicare", city: "Kandy", country: "sri-lanka", address: "665A, Peradeniya Road", contact: "Billing Team", email: "mobilemedicare@hotmail.com", services: "OPD", phone: "077-7840740" },
    { name: "Dambulla Nursing Home", city: "Dambulla", country: "sri-lanka", address: "60 Kurunegala Rd", contact: "Mr. Rohana / Mr. Gimhana", email: "rohanaaluwihare@gmail.com", services: "OPD", phone: "072-7253557" },
    { name: "Ideal Hospital", city: "Nuwara Eliya", country: "sri-lanka", address: "Park Rd", contact: "Dr. Joseph (FM)", email: "idealhospitals@gmail.com", services: "OPD", phone: "052-2223050" },
    { name: "Co-operative Hospital", city: "Nuwara Eliya", country: "sri-lanka", address: "Keena Rd", contact: "Mr. A.J.M.C. Asanka", email: "coophospitalnuwaraeliya@gmail.com", services: "OPD", phone: "077-5777244" },
    { name: "Medical Centre", city: "Ella", country: "sri-lanka", address: "Ella, Bandarawela", contact: "Dr. Ganga / Dr. Gamage", email: "gamage401@gmail.com", services: "OPD", phone: "071-8072890" },

    // --- SOUTHERN REGION ---
    { name: "Asiri Hospital", city: "Matara", country: "sri-lanka", address: "Kandy Road/Galle Rd", contact: "Ms. Thilangi", email: "admissionmatara@asiri.lk", services: "IPD + OPD", phone: "041-4390900" },
    { name: "Queensbury Hospital", city: "Galle", country: "sri-lanka", address: "91 Hirimbura Cross Rd", contact: "Billing Team", email: "nilushachamini9@gmail.com", services: "IPD + OPD", phone: "077-9277821" },
    { name: "Arogya Hospital", city: "Tangalle", country: "sri-lanka", address: "Beach Road", contact: "Mr. Sanjeewa", email: "arogyaacc@gmail.com", services: "IPD + OPD", phone: "047-2240488" },
    { name: "Southern Lanka Hospital", city: "Tangalle", country: "sri-lanka", address: "No. 144/1, Beliatta Road", contact: "Billing Dept", email: "southernlankahospitals@gmail.com", services: "IPD + OPD", phone: "047-5700800" },
    { name: "Medi Care / Ruhunu", city: "Hambantota", country: "sri-lanka", address: "A2, Hambantota", contact: "Dr. Keerthi", email: "ruhunu.medihospitalhambantota@gmail.com", services: "IPD + OPD", phone: "047-2220378" },

    // --- NORTH & EAST ---
    { name: "Northern Central Hospital", city: "Jaffna", country: "sri-lanka", address: "Jaffna", contact: "Mr. Shree / Mr. Padmanadan", email: "nchjaffna@gmail.com", services: "IPD + OPD", phone: "077-7712226" },
    { name: "Dhanvanthri Hospital", city: "Trincomalee", country: "sri-lanka", address: "03, Kandy road", contact: "Dr. Ghanalkabahu", email: "dvhtrinco@yahoo.com", services: "IPD + OPD", phone: "077-2301687" },
    { name: "GV Hospital", city: "Batticaloa", country: "sri-lanka", address: "36/1, New Road", contact: "Dr. Vivekanandarajah", email: "viveambi@yahoo.com", services: "IPD + OPD", phone: "065-2225696" },
    { name: "New Pioneer Hospital", city: "Batticaloa", country: "sri-lanka", address: "91, Pioneer Rd", contact: "Ms. Darshini / Mr. Kajen", email: "nphbatti@yahoo.com", services: "OPD", phone: "065-2223642" },
    { name: "Abisha Hospital", city: "Vavuniya", country: "sri-lanka", address: "24A, Katkuli", contact: "Mr. Alex Chandrakumar", email: "abishapvthospital@yahoo.com", services: "IPD + OPD", phone: "024-2221474" },
    { name: "Prabodha Hospital", city: "Ampara", country: "sri-lanka", address: "Pandukabaya mawatha", contact: "Dr. Asiri Dissanayake", email: "info@prabhodha.com", services: "IPD + OPD", phone: "063-2223606" },
    { name: "Suwashanthi Hospital", city: "Anuradhapura", country: "sri-lanka", address: "11, Maithripala Senanayake Mw", contact: "Mrs. Shanthi", email: "suwashanthi_hospital@yahoo.com", services: "IPD + OPD", phone: "025-2224917" },
    { name: "Venus Lanka Hospital", city: "Polonnaruwa", country: "sri-lanka", address: "28 Mile Post", contact: "Dinesh / Shanika", email: "accounts@venuslankahospital.com", services: "IPD + OPD", phone: "027-2223205" },
    { name: "Badulla Central Hospital", city: "Badulla", country: "sri-lanka", address: "No.12 ward street", contact: "Mr. Yohan Perera", email: "centralhospitalbadulla@gmail.com", services: "IPD + OPD", phone: "055-2222164" },

    // --- SPECIALIZED SERVICES & AMBULANCE ---
    { name: "Amazing Care Ambulance", city: "Colombo", country: "sri-lanka", contact: "Asiri Central", email: "amazingcare@asiri.lk", services: "Ambulance", phone: "077-9996964" },
    { name: "Royal Nursing Home", city: "Colombo", country: "sri-lanka", contact: "Colombo Nursing", email: "rnursinghome@yahoo.com", services: "Nursing Care/Ambulance", phone: "011-2804040" },
    { name: "Olympus Health Aid", city: "Tissamarahama", country: "sri-lanka", contact: "Amila Dilruk", email: "healthaidceylon@email.com", services: "OPD / Service Update", phone: "077-2613671" },
    { name: "Sigiriya Medical Center", city: "Sigiriya", country: "sri-lanka", contact: "Dr. Seneth", email: "mail@xinethhospitals.com", services: "OPD", phone: "072-8733283" },
    { name: "Arugam Bay Healthcare", city: "Arugam Bay", country: "sri-lanka", contact: "Dr. Chathuranga", email: "chaweerasinghe@gmail.com", services: "OPD", phone: "077-7310636" },
    { name: "Casons Rent a Car", city: "Colombo", country: "sri-lanka", contact: "Dileep", email: "dileep@casonsrentacar.com", services: "Car Provider", phone: "077-2354516" },
    { name: "Travel Taxi", city: "All Island", country: "sri-lanka", contact: "Nirodha", email: "srilankatraveltaxi@gmail.com", services: "Car Provider", phone: "076-0766977" },

    // india 
    { name: "Amit Jaggi Hospital", city: "Agra", country: "india", address: "Sector-1, Vibhav Nagar, Tajganj, Agra, Uttar Pradesh 282001", contact: "Amit Jaggi", email: "amitjaggimemorialhospital@gmail.com", services: "OPD + IPD", phone: "05622230515" },

    { name: "Moolchand Hospital", city: "Agra", country: "india", address: "NH2, Artoni, Agra, Uttar Pradesh 282007", contact: "Prerna Rawat / Sulagno", email: "Claims@moolchandhealthcare.com", services: "IPD", phone: "9953495997" },

    { name: "IIMT Hospital", city: "Agra", country: "india", address: "Bypass Road, Ganesh Nagar, Lawyer's Colony, Agra, Uttar Pradesh 282005", contact: "Dr Abhaypraya", email: "iimthospital@gmail.com", services: "IPD", phone: "09927818000" },

    { name: "Dr Ankur Sharma Clinic", city: "Ajmer", country: "india", address: "Lohagal Road, Hari Nagar, Amar Bazar, Ajmer, Rajasthan 305001", contact: "Dr. Ankur Sharma", email: "dr.ankursharma89@yahoo.com", services: "OPD", phone: "9782084075" },

    { name: "Bharat Hospital", city: "Ajmer", country: "india", address: "Lohagal Rd, Shastri Nagar, Jawahar Nagar, Ajmer, Rajasthan 305001", contact: "N/A", email: "bharathospitalajmer@gmail.com", services: "OPD + IPD", phone: "" },

    { name: "Fortis Escorts Hospital", city: "Amritsar", country: "india", address: "Majitha-Verka Bypass Road, Amritsar, Punjab 143004", contact: "Refer Navtej", email: "tpa.fehasr@fortishealthcare.com", services: "OPD + IPD", phone: "9815813030" },

    { name: "Amandeep Hospital", city: "Amritsar", country: "india", address: "Grand Trunk Rd, Model Town, Rani Ka Bagh, Amritsar, Punjab 143001", contact: "Atul Sharma", email: "internationalpatients@amandeephospital.org", services: "IPD", phone: "7707869099" },

    { name: "IVY Hospital", city: "Amritsar", country: "india", address: "Raja Sansi Rd, D R Enclave, Amritsar, Punjab 143101", contact: "Neeraj Chhabra", email: "corporatebilling.asr@ivyhospital.com", services: "IPD + OPD", phone: "9914102021" },

    { name: "Sterling Hospital", city: "Ahmedabad", country: "india", address: "Sterling Hospital Rd, Memnagar, Ahmedabad, Gujarat 380052", contact: "Gaurav Chaturvedi / Bharti Priyadarshi", email: "Int.Cord@sterlinghospitals.com", services: "IPD", phone: "8979672334" },

    { name: "Apollo Hospital International Ltd", city: "Ahmedabad", country: "india", address: "GIDC Bhat, Gandhinagar-Ahmedabad Rd, Gujarat 382428", contact: "Shahid Parvez", email: "krishnak@apolloahd.com", services: "IPD", phone: "7966701800" },

    { name: "KD Hospital (Kusum Dhirajlal Hospital)", city: "Ahmedabad", country: "india", address: "Vaishnodevi Circle, SG Road, Ahmedabad 382421", contact: "Himanshu Sharma / Kritika Kushwa", email: "himanshu.sharma@kdhospital.co.in", services: "IPD", phone: "918141700388" },

    { name: "Iris Hospital", city: "Anand", country: "india", address: "Lambhvel Rd, Patel Chokdi, Anand, Gujarat 388120", contact: "Harsha N Sikar", email: "irishospital2016@gmail.com", services: "IPD", phone: "9033050232" },

    { name: "Shree Krishna Hospital", city: "Anand", country: "india", address: "Anand - Sojitra Rd, Karamsad, Gujarat 388325", contact: "Dr Jeenal", email: "aruns@charutarhealth.org", services: "IPD", phone: "9004130405" },

    { name: "Little Flower Hospital and Research Centre", city: "Angamaly", country: "india", address: "SH 1, Angamaly, Kerala 683572", contact: "Ms. Jishy", email: "cro@lfhospital.org", services: "IPD", phone: "9745269870" },

    { name: "Fortis Hospital", city: "Bangalore", country: "india", address: "Bannerghatta Main Rd, Bengaluru, Karnataka 560076", contact: "Refer Contact List", email: "", services: "OPD + IPD", phone: "09668367253" },

    { name: "Fortis Hospital", city: "Bangalore", country: "india", address: "Cunningham Road, Bengaluru, Karnataka 560052", contact: "Refer Contact List", email: "puneeth.bj@fortishealthcare.com", services: "OPD + IPD", phone: "09686860310" },

    { name: "Apollo Hospitals", city: "Bangalore", country: "india", address: "Bannerghatta Main Rd, Bengaluru, Karnataka 560076", contact: "Abubakar S", email: "creditcell_bglr@apollohospitals.com", services: "IPD", phone: "9986211333" },

    { name: "Apollo Specialty Hospital", city: "Bangalore", country: "india", address: "Jayanagar East, Bengaluru, Karnataka 560011", contact: "N/A", email: "cash_blr@apollohospitals.com", services: "IPD", phone: "08046124444" },

    { name: "Aster RV Hospital", city: "Bangalore", country: "india", address: "JP Nagar, Bengaluru, Karnataka 560078", contact: "Arpan Chatterjee", email: "arpan.chatterjee@asterhospital.com", services: "OPD + IPD", phone: "8296842785" },

    { name: "Aster CMI Hospital", city: "Bangalore", country: "india", address: "New Airport Road, Sahakar Nagar, Bengaluru, Karnataka 560092", contact: "Arpan Chatterjee / Sherin George / Deepanshu", email: "arpan.chatterjee@asterhospital.com", services: "OPD + IPD", phone: "8296842785" },

    { name: "Aster Whitefield Hospital", city: "Bangalore", country: "india", address: "Whitefield Main Road, Bengaluru, Karnataka 560066", contact: "Arpan Chatterjee / Deepanshu", email: "arpan.chatterjee@asterhospital.com", services: "OPD + IPD", phone: "8296842785" },

    { name: "Manipal Hospital", city: "Bangalore", country: "india", address: "Old Airport Road", contact: "Ms. Gudimallam Lahari", email: "bikramjit@manipalhospitals.com", services: "OPD + IPD", phone: "9620722272" },

    { name: "Manipal Hospital", city: "Bangalore", country: "india", address: "Yeshwanthpur", contact: "Mr. Krishna Bardhan", email: "krishna.b@manipalhospitals.com", services: "OPD + IPD", phone: "9513610124" },

    { name: "Manipal Hospital", city: "Bangalore", country: "india", address: "Sarjapur", contact: "Mr. Vijay Prakash", email: "vijay.p@manipalhospitals.com", services: "OPD + IPD", phone: "9886630232" },

    { name: "Manipal Hospital", city: "Bangalore", country: "india", address: "Hebbal", contact: "Ms. Vishal Rao", email: "vasudha.CK@manipalhospitals.com", services: "OPD + IPD", phone: "8746030721" },

    { name: "Manipal Hospital", city: "Bangalore", country: "india", address: "Varthur Road", contact: "Mr. Ranjay Singh", email: "bikramjit@manipalhospitals.com", services: "OPD + IPD", phone: "9709999792" },

    { name: "Manipal Hospital", city: "Bangalore", country: "india", address: "Millers Road", contact: "Mr. Mehlam Yunus Ali", email: "bikramjit@manipalhospitals.com", services: "OPD + IPD", phone: "9619644521" },

    { name: "Manipal Hospital", city: "Bangalore", country: "india", address: "Whitefield", contact: "Mr. Subham Biswas / Avinash", email: "bikramjit@manipalhospitals.com", services: "OPD + IPD", phone: "9741087086" },

    { name: "Manipal Hospital", city: "Bangalore", country: "india", address: "Salem", contact: "Mr. Gururagavendran B", email: "bikramjit@manipalhospitals.com", services: "OPD + IPD", phone: "9945061166" },

    { name: "Manipal Hospital", city: "Bangalore", country: "india", address: "Jayanagar", contact: "Mr. Ramesh Choudhary", email: "bikramjit@manipalhospitals.com", services: "OPD + IPD", phone: "9916109499" },

    { name: "Manipal Hospital", city: "Bangalore", country: "india", address: "Malleshwaram", contact: "Mr. Harish Seenappa", email: "bikramjit@manipalhospitals.com", services: "OPD + IPD", phone: "9886659233" },

    { name: "Manipal Hospital", city: "Bangalore", country: "india", address: "Doddaballapur", contact: "Mr. Mohan Muniyappa", email: "bikramjit@manipalhospitals.com", services: "IPD + OPD", phone: "9513487887" },

    { name: "Rainbow Children's Hospital", city: "Bangalore", country: "india", address: "Bannerghatta Main Rd, Bengaluru, Karnataka 560076", contact: "Sivaraman M", email: "sivaraman.m@rainbowhospitals.in", services: "IPD + OPD", phone: "7995288825" },

    { name: "Rainbow Children's Hospital", city: "Bangalore", country: "india", address: "International Airport Road, Bengaluru, Karnataka 560092", contact: "Sivaraman M", email: "sivaraman.m@rainbowhospitals.in", services: "IPD + OPD", phone: "7995288825" },

    { name: "Rainbow Children's Hospital", city: "Bangalore", country: "india", address: "KR Puram, Bengaluru, Karnataka 560037", contact: "Sivaraman M", email: "sivaraman.m@rainbowhospitals.in", services: "IPD + OPD", phone: "7995288825" },

    { name: "Sakra World Hospital", city: "Bangalore", country: "india", address: "Outer Ring Rd, Marathahalli, Bengaluru, Karnataka 560103", contact: "Smita", email: "smita.chowdhury@sakraworldhospital.com", services: "IPD", phone: "7003626425" },

    { name: "Ivy Hospital", city: "Bathinda", country: "india", address: "Mansa Road, Bathinda, Punjab 151005", contact: "Jagdeep Singh", email: "credit.bth@ivyhospital.com", services: "OPD + IPD", phone: "9115403529" },

    { name: "Dr R.L. Choudhary Healthcare", city: "Bikaner", country: "india", address: "E264 Kanta Khaturiya Colony, Bikaner 334003", contact: "Dr. R.L. Choudhary", email: "drchoudharyhealthcare@gmail.com", services: "OPD + IPD", phone: "918963833333" },

    { name: "Manipal Hospital", city: "Bhubaneswar", country: "india", address: "Khandagiri, Shankarpur, Odisha 751030", contact: "N/A", email: "bikramjit@manipalhospitals.com", services: "OPD + IPD", phone: "" },

    { name: "Aster MIMS Hospital", city: "Calicut", country: "india", address: "Govindapuram, Kozhikode, Kerala 673007", contact: "Bindu Amarai", email: "insurance.mimsk@asterhospital.com", services: "OPD + IPD", phone: "9562050002" },

    { name: "Aster MIMS Kottakkal", city: "Calicut", country: "india", address: "NH 66, Thrissur Road, Changuvetty, Kerala 676501", contact: "Ranju Rajendran", email: "ranju01@asterhospital.com", services: "OPD + IPD", phone: "9656000699" },

    { name: "Fortis Hospital", city: "Chennai", country: "india", address: "Arcot Rd, Vadapalani, Chennai 600026", contact: "Refer Contact List", email: "shumaila.tarannum@fortishealthcare.com", services: "OPD + IPD", phone: "09840204444" },

    { name: "Noble Hospital", city: "Chennai", country: "india", address: "Audiappa St, Purasaiwakkam, Chennai 600084", contact: "Dr. Prabha", email: "insurance@noblehospital.in", services: "OPD + IPD", phone: "9094996212" },

    { name: "Apollo Hospital", city: "Chennai", country: "india", address: "Greams Road, Thousand Lights, Chennai 600006", contact: "Dilip", email: "gop@apollohospitals.com", services: "IPD", phone: "9710422305" },

    { name: "Apollo Specialty Hospital OMR", city: "Chennai", country: "india", address: "Old Mahabalipuram Rd, Perungudi, Chennai 600096", contact: "Dilip / Parthiban", email: "gop@apollohospitals.com", services: "IPD", phone: "9710422305" },

    { name: "Apollo Proton Cancer Centre", city: "Chennai", country: "india", address: "Tharamani, Chennai 600041", contact: "Dilip", email: "gop@apollohospitals.com", services: "IPD", phone: "9710422305" },

    { name: "MIOT International", city: "Chennai", country: "india", address: "Mount Poonamallee Rd, Manapakkam, Chennai 600089", contact: "Satyamurti", email: "ips@miothospitals.com", services: "IPD + OPD", phone: "9841548959" },

    { name: "Rainbow Children's Hospital", city: "Chennai", country: "india", address: "Anna Salai, Guindy, Chennai 600015", contact: "Sivaraman M", email: "sivaraman.m@rainbowhospitals.in", services: "OPD + IPD", phone: "7995288825" },

    { name: "Fortis Malar Hospital", city: "Chennai", country: "india", address: "Gandhi Nagar, Adyar, Chennai 600020", contact: "N/A", email: "malar.ips@fortishealthcare.com", services: "N/A", phone: "9962599933" },

    { name: "SIMS Hospital", city: "Chennai", country: "india", address: "Vadapalani", contact: "Shumaila", email: "careconnect@sims-hospitals.com", services: "OPD + IPD", phone: "9136236966" },

    { name: "Kauvery Hospital", city: "Chennai", country: "india", address: "Vadapalani", contact: "Siranjeevi S M", email: "amcorporate.kvp@kauveryhospital.com", services: "OPD + IPD", phone: "7420870807" },

    { name: "Kauvery Hospital", city: "Chennai", country: "india", address: "Alwarpet", contact: "Siranjeevi S M", email: "amcorporate.kvp@kauveryhospital.com", services: "OPD + IPD", phone: "7420870807" },

    { name: "K.G Hospital", city: "Coimbatore", country: "india", address: "Government Arts College Rd, Coimbatore 641018", contact: "Jayasudha / Sasidharan", email: "kginsurance@kghospital.com", services: "IPD + OPD", phone: "9443774963" },

    { name: "Kovai Medical Center and Hospital (KMCH)", city: "Coimbatore", country: "india", address: "Avinashi Rd, Peelamedu, Coimbatore 641014", contact: "Kavitha", email: "kmchinsurance@gmail.com", services: "IPD + OPD", phone: "7558112333" },

    { name: "KMCH Erode Speciality Center", city: "Coimbatore", country: "india", address: "Erode Speciality Center", contact: "Kavitha", email: "kmchinsurance@gmail.com", services: "IPD + OPD", phone: "7558112333" },

    { name: "KMCH Erode Center", city: "Coimbatore", country: "india", address: "Erode Center", contact: "Kavitha", email: "kmchinsurance@gmail.com", services: "IPD + OPD", phone: "7558112333" },

    { name: "KMCH Sulur Center", city: "Coimbatore", country: "india", address: "Sulur Center", contact: "Kavitha", email: "kmchinsurance@gmail.com", services: "IPD + OPD", phone: "7558112333" },

    { name: "KMCH City Center", city: "Coimbatore", country: "india", address: "City Center", contact: "Kavitha", email: "kmchinsurance@gmail.com", services: "IPD + OPD", phone: "7558112333" },

    { name: "KMCH Kovilpalayam Hospital Center", city: "Coimbatore", country: "india", address: "Kovilpalayam", contact: "Kavitha", email: "kmchinsurance@gmail.com", services: "IPD + OPD", phone: "7558112333" },

    { name: "Nankem Hospital", city: "Coonoor", country: "india", address: "Near YWCA Rd, Bedford, Coonoor 643101", contact: "Mrs. Sherry Paul / Manoj", email: "nankemmkc@yahoo.com", services: "IPD", phone: "9789357206" },

    { name: "Max Super Specialty Hospital", city: "Dehradun", country: "india", address: "Mussoorie Diversion Rd, Dehradun 248001", contact: "Prachi / Ravi Arya", email: "ip.billing@maxhealthcare.com", services: "IPD + OPD", phone: "9650708358" },

    { name: "Himalayan Hospital", city: "Dehradun", country: "india", address: "Jolly Grant, Dehradun 248016", contact: "Mukesh", email: "hihtms@hotmail.com", services: "IPD", phone: "" },

    { name: "Synergy Institute of Medical Sciences", city: "Dehradun", country: "india", address: "Ballupur, Dehradun 248001", contact: "Kamal Kanth Garg / Nitika", email: "nitika.anand@mail.synergyhospital", services: "IPD", phone: "9412052770" },

    { name: "Dr. R.K. Mahajan Clinic", city: "Dharamshala", country: "india", address: "Near Club Mahindra Hotel, Sheela Chowk, Dharamshala 176057", contact: "Dr. Mahajan", email: "neha3713@gmail.com", services: "OPD", phone: "9418086761" },

    { name: "Indian Spinal Injury Center", city: "Delhi", country: "india", address: "Vasant Kunj, New Delhi 110070", contact: "Somvati", email: "support.intl@isichealthcare.org", services: "IPD + OPD", phone: "9582388446" },

    { name: "Max Super Specialty Hospital", city: "Delhi", country: "india", address: "Saket", contact: "Vandana", email: "TPA.MHVI@maxhealthcare.com", services: "IPD + OPD", phone: "9560678903" },

    { name: "Max Super Specialty Hospital (East Block)", city: "Delhi", country: "india", address: "Saket", contact: "Vandana", email: "TPA.MHVI@maxhealthcare.com", services: "IPD + OPD", phone: "9560678903" },

    { name: "Max Multi Specialty Centre", city: "Delhi", country: "india", address: "Panchsheel Park", contact: "Lakshay", email: "Lakshay.Sharma@maxhealthcare.com", services: "IPD + OPD", phone: "8375027101" },

    { name: "Max Super Specialty Hospital", city: "Delhi", country: "india", address: "Patparganj", contact: "Anil", email: "tpa.ppg@maxhealthcare.com", services: "IPD + OPD", phone: "9711113122" },

    { name: "Max Super Specialty Hospital", city: "Delhi", country: "india", address: "Shalimar Bagh", contact: "Vivek", email: "tpa.shb@maxhealthcare.com", services: "IPD + OPD", phone: "8586918870" },

    { name: "Max Smart City Hospital", city: "Delhi", country: "india", address: "Saket", contact: "Tanveer", email: "MSS_IPSTeam@maxhealthcare.com", services: "IPD + OPD", phone: "9643183876" },

    { name: "Apollo Hospital Indraprastha", city: "Delhi", country: "india", address: "Sarita Vihar, New Delhi 110076", contact: "Deepika Loomba", email: "deepika.l@apollohospitalsdelhi.com", services: "IPD + OPD", phone: "9958290345" },

    { name: "Primus Super Specialty Hospital", city: "Delhi", country: "india", address: "Chanakyapuri, New Delhi 110021", contact: "TPA Coordination", email: "internationalpatientcare@primushospital.com", services: "IPD + OPD", phone: "" },

    { name: "Fortis Flt Lt Rajan Dhall Hospital", city: "Delhi", country: "india", address: "Vasant Kunj, New Delhi 110070", contact: "Refer Contact List", email: "TPA.VK@fortishealthcare.com", services: "IPD + OPD", phone: "01142776222" },

    { name: "Fortis Escorts Heart Institute", city: "Delhi", country: "india", address: "Okhla Road, New Delhi 110025", contact: "Refer Contact List", email: "fehi.international@fortishealthcare.com", services: "IPD + OPD", phone: "01147135000" },

    { name: "Fortis La Femme", city: "Delhi", country: "india", address: "Greater Kailash II, New Delhi 110048", contact: "Sonia Balwani", email: "tpa.flf@fortishealthcareonline.com", services: "IPD + OPD", phone: "9911121848" },

    { name: "Aashlok Hospital", city: "Delhi", country: "india", address: "Safdarjung Enclave, New Delhi", contact: "Kamlesh Yadav", email: "insurance.aashlok@fortishealthcare.com", services: "IPD + OPD", phone: "9268109909" },

    { name: "Fortis C-DOC Hospital", city: "Delhi", country: "india", address: "Chirag Enclave, New Delhi 110048", contact: "Shahzad Hussain", email: "ipd.cdoc@fortishealthcare.com", services: "IPD + OPD", phone: "9717352600" },

    { name: "Fortis Hospital", city: "Delhi", country: "india", address: "Shalimar Bagh, New Delhi 110088", contact: "Nutan Kaushik / Jasbir", email: "ips.sb@fortishealthcare.com", services: "IPD + OPD", phone: "9818998827" },

    { name: "Max BLK Super Specialty Hospital", city: "Delhi", country: "india", address: "Pusa Road, New Delhi 110005", contact: "Puneet", email: "surabhi.gupta@blkhospital.com", services: "IPD + OPD", phone: "9873155694" },

    { name: "Care Medical Centre", city: "Delhi", country: "india", address: "Paharganj, New Delhi 110055", contact: "Dr. Sharvan Kumar Gupta", email: "drsharvangupta@gmail.com", services: "OPD", phone: "9811128179" },

    { name: "PSRI Hospital", city: "Delhi", country: "india", address: "Sheikh Sarai, New Delhi 110017", contact: "Sarovar Tanwar", email: "shashi.palni@psri.net", services: "IPD", phone: "9870571344" },

    { name: "Moolchand Medicity", city: "Delhi", country: "india", address: "Lajpat Nagar III, New Delhi 110024", contact: "Prerna Rawat", email: "claims@moolchandhealthcare.com", services: "IPD", phone: "9953495997" },

    { name: "Rainbow Children Hospital (Rosewalk Healthcare)", city: "Delhi", country: "india", address: "Panchsheel Park, New Delhi 110017", contact: "N/A", email: "ipbilling.rhl@rainbowhospitals.in", services: "IPD", phone: "" },

    { name: "Hope Care India", city: "Delhi", country: "india", address: "Uday Park, New Delhi", contact: "Dr Deepak Raheja", email: "docraheja@gmail.com", services: "IPD + OPD", phone: "" },

    { name: "Madhukar Rainbow Children Hospital", city: "Delhi", country: "india", address: "Malviya Nagar, New Delhi 110017", contact: "Jaspreet / Deepak Joshi", email: "international.mhdel@rainbowhospitals.in", services: "IPD", phone: "9999529666" },

    { name: "Tulasi Hospital", city: "Gurgaon", country: "india", address: "Sector 64, Gurgaon 122102", contact: "Dr Ruchika / Gaurav Gupta", email: "info@tulasihealthcare.com", services: "IPD", phone: "8800000255" },

    { name: "Manipal Hospital", city: "Dwarka", country: "india", address: "Dwarka", contact: "Jasbir Tokas", email: "", services: "IPD + OPD", phone: "" },

    { name: "Max Hospital", city: "Dwarka", country: "india", address: "Dwarka", contact: "Dheeraj", email: "", services: "IPD + OPD", phone: "9899743244" },

    { name: "Artemis Hospital", city: "Dwarka", country: "india", address: "Sector 51, Gurgaon", contact: "", email: "", services: "OPD + IPD", phone: "" },

    { name: "Fortis Escorts Hospital", city: "Faridabad", country: "india", address: "Neelam Bata Rd, Faridabad 121001", contact: "Nishant", email: "escorts.faridabad@fortishealthcare.com", services: "IPD + OPD", phone: "9911888896" },

    { name: "ARSH Superspeciality Hospital", city: "Gaya", country: "india", address: "AP Colony, Gaya", contact: "Nav Prabhat Sharma", email: "arshsuperspeciality20@gmail.com", services: "IPD", phone: "9031006534" },

    { name: "Abhay Institute of Medical Sciences", city: "Gaya", country: "india", address: "Gaya Airport Rd, Bihar 823001", contact: "Rohit Kumar", email: "aimsgayabihar@gmail.com", services: "IPD", phone: "97070095644" },

    { name: "Max Super Specialty Hospital", city: "Ghaziabad", country: "india", address: "Vaishali, Ghaziabad 201012", contact: "Sumit", email: "sumit.rawat@maxhealthcare.com", services: "IPD + OPD", phone: "9953236994" },

    { name: "Manipal Hospital", city: "Ghaziabad", country: "india", address: "NH-24, Ghaziabad", contact: "Manoj S", email: "manoj.s@manipalhospitals.com", services: "IPD + OPD", phone: "9873662776" },

    { name: "Victor Hospital", city: "Goa", country: "india", address: "Margao, Goa 403601", contact: "Aniket", email: "ops@victorhospital.com", services: "IPD + OPD", phone: "7507070840" },

    { name: "Manipal Hospital", city: "Goa", country: "india", address: "Dona Paula, Panaji, Goa 403004", contact: "Jasmin", email: "insurance.desk@manipalhospitals.com", services: "IPD + OPD", phone: "9049476073" },

    { name: "Vision Hospital", city: "Goa", country: "india", address: "Mapusa, Goa 403507", contact: "Kishori", email: "insurance@visionhospitalgoa.com", services: "IPD + OPD", phone: "7755056688" },

    { name: "Campal Health Clinic", city: "Goa", country: "india", address: "Panjim, Goa 403001", contact: "Xavier Crasto", email: "campalhealthservices@gmail.com", services: "IPD + OPD", phone: "9850955271" },

    { name: "Mother Care Hospital", city: "Goa", country: "india", address: "Margao, Goa 403601", contact: "Sagar Utagi", email: "mothercaremargao@gmail.com", services: "IPD + OPD", phone: "9422058708" },

    { name: "St Anthony Hospital", city: "Goa", country: "india", address: "Anjuna, Goa 403509", contact: "Dr Henrique", email: "jawaharlalhenriques@hotmail.com", services: "IPD + OPD", phone: "918788575818" },

    { name: "Chodankar Hospital", city: "Goa", country: "india", address: "Porvorim, Goa", contact: "Dr Chodankar", email: "chodankarhospital@gmail.com", services: "IPD + OPD", phone: "9822589291" },

    { name: "Dukle Hospital", city: "Goa", country: "india", address: "Candolim, Goa", contact: "Dr Dukle", email: "drdukleshospital@gmail.com", services: "IPD + OPD", phone: "9822103008" },

    { name: "V.M Salgaocar Hospital", city: "Goa", country: "india", address: "Vasco da Gama, Goa", contact: "TPA Desk", email: "customercare@smrcgoa.org", services: "IPD + OPD", phone: "9850458673" },

    { name: "Healthway Hospital", city: "Goa", country: "india", address: "Velha Goa", contact: "Insurance Desk", email: "insurance@healthwayhospitals.com", services: "IPD + OPD", phone: "7030961249" },

    { name: "RG Stone Urology Hospital", city: "Goa", country: "india", address: "Panjim, Goa", contact: "Ravi Kumar", email: "tpaandbilling@gmail.com", services: "IPD + OPD", phone: "8588593388" },

    { name: "Borkar Multispeciality Hospital", city: "Goa", country: "india", address: "Margao, Goa", contact: "Dr Borkar", email: "borkarmultispecialityhospital@gmail.com", services: "IPD + OPD", phone: "" },

    { name: "Dr Shastri Clinic", city: "Gokarna", country: "india", address: "Gokarna, Karnataka 581326", contact: "Dr Mahabalamurti Shastri", email: "gokarna@ktkbank.com", services: "OPD", phone: "8386257220" },

    { name: "Fortis Memorial Research Institute", city: "Gurgaon", country: "india", address: "Sector 44, Gurgaon 122002", contact: "Kumar Gaurav", email: "fmri@fortishealthcare.com", services: "IPD + OPD", phone: "9599449902" },

    { name: "Manipal Hospital", city: "Gurgaon", country: "india", address: "Palam Vihar, Gurgaon", contact: "Hemlata Rajput", email: "hemlata.rajput@manipalhospitals.com", services: "IPD + OPD", phone: "9911273058" },

    { name: "Max Hospital", city: "Gurgaon", country: "india", address: "Sector 43, Gurgaon", contact: "Gargi", email: "billing.ggn@maxhealthcare.com", services: "IPD + OPD", phone: "8826011844" },

    { name: "Marengo Asia Hospital", city: "Gurgaon", country: "india", address: "Gurgaon", contact: "Usman", email: "", services: "OPD + IPD", phone: "9910756149" },

    { name: "IVY Hospital", city: "Hoshiarpur", country: "india", address: "Vijay Nagar, Punjab 146001", contact: "Krishan Chand", email: "marketing.hspr@ivyhospital.com", services: "IPD + OPD", phone: "8054625900" },

    { name: "KLS Hospital", city: "Hospet", country: "india", address: "Basaveshwara Extension, Hospet 583203", contact: "Dr Arjun", email: "arjun89kals@gmail.com", services: "IPD + OPD", phone: "9900200209" },

    { name: "Apollo Health City Hospital", city: "Hyderabad", country: "india", address: "Jubilee Hills, Hyderabad 500033", contact: "Radhey Mohan", email: "radheymohan_p@apollohospitals.com", services: "IPD", phone: "9849171873" },

    { name: "Aster Prime Hospital", city: "Hyderabad", country: "india", address: "Ameerpet, Hyderabad 500038", contact: "Kundan / Sairam", email: "crm.prime@asterhospital.com", services: "IPD + OPD", phone: "9666028071" },

    { name: "Rainbow Children's Hospital", city: "Hyderabad", country: "india", address: "Kondapur, Hyderabad", contact: "Sivaraman M", email: "intmktg.bln@rainbowhospitals.in", services: "IPD + OPD", phone: "7995288825" },

    { name: "Rainbow Children's Hospital BirthRight", city: "Hyderabad", country: "india", address: "Serilingampally, Hyderabad", contact: "Sivaraman M", email: "sivaraman.m@rainbowhospitals.in", services: "IPD + OPD", phone: "7995288825" },

    { name: "Bombay Hospital", city: "Indore", country: "india", address: "Vijay Nagar, Indore 452010", contact: "Sucheta / Dr Reddy", email: "bombay.hospital.indore@gmail.com", services: "IPD + OPD", phone: "9820788236" },

    { name: "Sanjeevani Hospital", city: "Jaipur", country: "india", address: "Bani Park, Jaipur 302016", contact: "Dr Panicker", email: "sanjeevani.hospital@gmail.com", services: "IPD + OPD", phone: "9829062202" },

    { name: "Fortis Escorts Hospital", city: "Jaipur", country: "india", address: "Malviya Nagar, Jaipur 302017", contact: "Pooja Sharma / Sumit Choudhary", email: "pooja.sharma@fortishealthcare.com", services: "IPD + OPD", phone: "9873573392" },

    { name: "Manipal Hospital", city: "Jaipur", country: "india", address: "Vidhyadhar Nagar, Jaipur 302039", contact: "Ramesh Dharmani", email: "anurag.dixit@manipalhospitals.com", services: "IPD + OPD", phone: "8947844931" },

    { name: "Santokba Durlabhji Memorial Hospital", city: "Jaipur", country: "india", address: "Rambagh Circle, Jaipur 302015", contact: "Girjesh Tiwari", email: "sdmhj@gmail.com", services: "IPD", phone: "9929607084" },

    { name: "Rajasthan Hospital", city: "Jaipur", country: "india", address: "Vishwakarma Industrial Area, Jaipur", contact: "Dr Lokesh Yadav", email: "drlokeshyadav@rajasthanhospital.in", services: "IPD", phone: "" },

    { name: "Eternal Multispeciality Hospital", city: "Jaipur", country: "india", address: "Jagatpura Road, Jaipur 302017", contact: "Dr Arif Khan / Vikrant", email: "domesticmarketing@eternalheart.org", services: "IPD", phone: "8890010919" },

    { name: "VPS Lakeshore Hospital", city: "Kochi", country: "india", address: "NH-66 Bypass, Nettoor, Maradu, Kochi, Kerala 682040", contact: "Sujith / Gokul Gopi", email: "manager.iip@lakeshorehospital.org", services: "IPD", phone: "9747028800" },

    { name: "Aster Medcity", city: "Kochi", country: "india", address: "Cheranelloor, Kochi, Kerala 682027", contact: "Nitheesh G N / Savitha", email: "savitha.unni@asterhospital.com", services: "IPD + OPD", phone: "04846699999" },

    { name: "Gautham Hospital", city: "Kochi", country: "india", address: "Panayappilly, Kochi, Kerala 682005", contact: "Jeena Leni", email: "insurance@gauthamhospital.org", services: "IPD + OPD", phone: "8606216733" },

    { name: "Rajagiri Hospital", city: "Kochi", country: "india", address: "Aluva, Kochi, Kerala 683112", contact: "Chris John Mammen", email: "hcf@rajagirihospital.com", services: "IPD + OPD", phone: "9061979289" },

    { name: "KIMS Hospital", city: "Kottayam", country: "india", address: "Kudamaloor, Kottayam, Kerala 686017", contact: "Anthony Morris / Darshana", email: "insurance.ktm@kimshealth.org", services: "IPD + OPD", phone: "9847878182" },

    { name: "Aster Aadhar Hospital", city: "Kolhapur", country: "india", address: "Shastri Nagar, Kolhapur 416012", contact: "Dr Aniket Suryoshi", email: "aster.tpa@asterhospital.com", services: "OPD + IPD", phone: "02316622555" },

    { name: "Ruby General Hospital", city: "Kolkata", country: "india", address: "Eastern Metropolitan Bypass, Kolkata 700107", contact: "Mr Amit", email: "rubyhospital09@gmail.com", services: "OPD + IPD", phone: "9831184931" },

    { name: "Apollo Gleneagles Hospital", city: "Kolkata", country: "india", address: "Canal Circular Rd, Kolkata 700054", contact: "Prasun D / Debabrata", email: "ips_kol@apollohospitals.com", services: "OPD + IPD", phone: "9614889989" },

    { name: "Medica Superspeciality Hospital", city: "Kolkata", country: "india", address: "Mukundapur, EM Bypass, Kolkata", contact: "", email: "corporatedesk.mshk@medicasynergie.in", services: "OPD + IPD", phone: "" },

    { name: "Manipal Hospital", city: "Kolkata", country: "india", address: "Salt Lake City, Kolkata 700091", contact: "Tanaji Maulik / Molay Saha", email: "bikramjit@manipalhospitals.com", services: "OPD + IPD", phone: "9903151499" },

    { name: "Bellevue Clinic", city: "Kolkata", country: "india", address: "Elgin, Kolkata 700017", contact: "Amitapa Halder", email: "insurance@bellevueclinic.com", services: "IPD", phone: "8100992608" },

    { name: "AMRI Hospital", city: "Kolkata", country: "india", address: "Dhakuria, Kolkata 700029", contact: "Anil Malawat / Abhijit Brahma", email: "bikramjit@manipalhospitals.com", services: "IPD + OPD", phone: "9831741088" },

    { name: "Fortis Hospital Anandapur", city: "Kolkata", country: "india", address: "EM Bypass, Kolkata 700107", contact: "Dr Bapi Singh", email: "bapi.singh@fortishealthcare.com", services: "OPD + IPD", phone: "9432052240" },

    { name: "Fortis Kidney Institute", city: "Kolkata", country: "india", address: "Gariahat, Kolkata 700029", contact: "Arijit Roy Chowdhury", email: "arijit.chowdhury@fortishealthcare.com", services: "OPD + IPD", phone: "9831186983" },

    { name: "Dr G K Parmar Clinic", city: "Jaisalmer", country: "india", address: "Indira Colony, Jaisalmer", contact: "Dr Parmar", email: "gajjunelu@gmail.com", services: "OPD", phone: "9414393243" },

    { name: "Priya Hospital", city: "Jaisalmer", country: "india", address: "Ramgarh Rd, Jaisalmer 345001", contact: "", email: "care@priyahospitals.com", services: "IPD", phone: "07357671666" },

    { name: "Shalby Hospital", city: "Jabalpur", country: "india", address: "Vijay Nagar, Jabalpur 482002", contact: "Jaiveer Singh", email: "medicalim.jbp@shalby.org", services: "IPD", phone: "9575801025" },

    { name: "Makkar Hospital", city: "Jalandhar", country: "india", address: "Adarsh Nagar, Jalandhar 144001", contact: "Dr Kamaljit Makkar", email: "drmakkar97@rediffmail.com", services: "IPD + OPD", phone: "9814060462" },

    { name: "Global Hospital", city: "Jalandhar", country: "india", address: "Lajpat Nagar, Jalandhar", contact: "S Agarwal", email: "", services: "IPD", phone: "9155999000" },

    { name: "Joshi Hospital", city: "Jalandhar", country: "india", address: "Kapurthala Chowk, Jalandhar", contact: "Dr Joshi", email: "joshihospital1991@gmail.com", services: "IPD + OPD", phone: "" },

    { name: "Goyal Hospital", city: "Jodhpur", country: "india", address: "Sardarpura, Jodhpur 342001", contact: "Pradeep Raj", email: "tpa@goyalhospital.org", services: "IPD + OPD", phone: "7665841234" },

    { name: "Medipulse Hospital", city: "Jodhpur", country: "india", address: "Basni Phase II, Jodhpur 342005", contact: "Rameshwar Lal", email: "medicalim@medipulse.in", services: "IPD", phone: "9928538144" },

    { name: "Rama Hospital", city: "Kanpur", country: "india", address: "Lakhanpur, Kanpur 208024", contact: "", email: "hrc@ramagroup.in", services: "IPD", phone: "05122584223" },

    { name: "Fortis Hospital", city: "Kangra", country: "india", address: "Dharamshala Rd, Kangra 176001", contact: "Ved / Dr Divya", email: "fortiskangra.tpa@himachalhealthcare.com", services: "IPD + OPD", phone: "9805516504" },

    { name: "Aster MIMS", city: "Kannur", country: "india", address: "Chala East, Kannur 670621", contact: "Liji Thomas", email: "insurance.mimskr@asterhospital.com", services: "IPD + OPD", phone: "8089123582" },

    { name: "Dr R P Khare Clinic", city: "Khajuraho", country: "india", address: "Vidyanagar Colony, Khajuraho 471606", contact: "Dr Khare", email: "doctorrpkhare@gmail.com", services: "OPD", phone: "9425143374" },

    { name: "IVY Hospital", city: "Khanna", country: "india", address: "GT Road, Khanna 141401", contact: "Sameer", email: "corporate.khanna@ivyhospital.com", services: "IPD + OPD", phone: "9877099961" },

    { name: "Jain Multispeciality Hospital", city: "Khanna", country: "india", address: "Khanna, Punjab 141401", contact: "Ruby", email: "", services: "IPD + OPD", phone: "9914219143" },

    { name: "Woodlands Hospital", city: "Kolkata", country: "india", address: "Alipore, Kolkata 700027", contact: "", email: "collection@woodlandshospital.in", services: "IPD", phone: "" },

    { name: "CMRI Hospital", city: "Kolkata", country: "india", address: "Diamond Harbour Rd, Kolkata 700027", contact: "", email: "cashless@cmri.in", services: "IPD", phone: "" },

    { name: "Ohio Heart & Medical Centre", city: "Kolkata", country: "india", address: "New Town, Kolkata 700156", contact: "", email: "marketing@ohiohospital.in", services: "IPD", phone: "" },

    { name: "Upasana Hospital", city: "Kollam", country: "india", address: "Kadappakkada, Kollam 691001", contact: "Dr Chandrasenan", email: "upsanahospital@gmail.com", services: "OPD + IPD", phone: "9447471456" },

    { name: "KIMS Kollam Hospital", city: "Kollam", country: "india", address: "Kottiyam, Kollam 691571", contact: "Sudhin Kumar", email: "kollam@kimshealth.org", services: "IPD", phone: "9847878182" },

    { name: "Max Hospital", city: "Lucknow", country: "india", address: "Gomti Nagar, Lucknow 226010", contact: "Shubham Singh", email: "shubham.singh@maxhealthcare.com", services: "OPD + IPD", phone: "8506002672" },

    { name: "Fortis Hospital", city: "Ludhiana", country: "india", address: "Chandigarh Rd, Ludhiana 141010", contact: "Shubham Singh", email: "shubham.talwar@fortishealthcare.com", services: "OPD + IPD", phone: "8506002672" },

    { name: "DMC Hospital", city: "Ludhiana", country: "india", address: "Civil Lines, Ludhiana 141001", contact: "Gurjeet Singh", email: "medicaltourism@dmch.edu", services: "IPD", phone: "9819724000" },

    { name: "Mohandai Oswal Hospital", city: "Ludhiana", country: "india", address: "Sherpur, Ludhiana 141009", contact: "Rachan Sood", email: "rachan.sood@moh.org.in", services: "IPD", phone: "9814297777" },

    { name: "Lady Willingdon Hospital", city: "Manali", country: "india", address: "Model Town, Manali 175131", contact: "Cristina", email: "christina_dhas@yahoo.com", services: "IPD", phone: "9816649808" },

    { name: "Sharma Clinic", city: "Manali", country: "india", address: "Siyal, Manali", contact: "Dr Sucheta", email: "drsuchetamanali@yahoo.com", services: "OPD + IPD", phone: "9816056477" },

    { name: "CIMS Hospital", city: "Mathura", country: "india", address: "NH 19, Mathura 281001", contact: "Dinesh Tomar", email: "tpa@cimsmathura.com", services: "OPD + IPD", phone: "8700832163" },

    { name: "Unity Hospital", city: "Mangalore", country: "india", address: "Highlands, Mangalore 575002", contact: "Insurance Dept", email: "insurance@unityhospital.in", services: "OPD + IPD", phone: "08244245555" },

    { name: "KMC Hospital", city: "Mangalore", country: "india", address: "Ambedkar Circle, Mangalore 575001", contact: "Sudhendra Pai", email: "sudhendra.pai@manipalhospitals.com", services: "OPD + IPD", phone: "9845496990" },

    { name: "Apollo Specialty Hospital", city: "Madurai", country: "india", address: "KK Nagar, Madurai 625020", contact: "Arockiaraj", email: "creditcell_mdu@apollohospitals.com", services: "IPD", phone: "9965534211" },

    { name: "Vadamalayan Hospital", city: "Madurai", country: "india", address: "Chockikulam, Madurai 625002", contact: "Dr Guhapriya", email: "claims@vadamalayan.org", services: "IPD", phone: "07708855111" },

    { name: "Fortis Hospital", city: "Mohali", country: "india", address: "Sector 62, Mohali 160062", contact: "Meenu Sood", email: "tpahelpdesk.mohali@fortishealthcare.com", services: "OPD + IPD", phone: "8427654022" },

    { name: "IVY Hospital", city: "Mohali", country: "india", address: "Sector 71, Mohali 160071", contact: "Abhishek", email: "dmcorp@ivyhospital.com", services: "OPD + IPD", phone: "8699999914" },

    { name: "Max Super Specialty Hospital", city: "Mohali", country: "india", address: "Phase 6, Mohali 160055", contact: "Prachit", email: "tpa.mohali@maxhealthcare.com", services: "OPD + IPD", phone: "919650708358" },

    { name: "Cheema Medical Complex", city: "Mohali", country: "india", address: "Phase 4, Mohali", contact: "Ajaywant Cheema", email: "cmchospital@gmail.com", services: "OPD + IPD", phone: "9815400070" },

    { name: "Hinduja Hospital", city: "Mumbai", country: "india", address: "Khar West, Mumbai 400052", contact: "Deepak Kulvekar", email: "billing@hindujahospital.com", services: "OPD + IPD", phone: "8108499966" },

    { name: "Hiranandani Hospital", city: "Mumbai", country: "india", address: "Powai, Mumbai 400076", contact: "Archana Bhalla", email: "tpadesk@hiranandanihospital.org", services: "OPD + IPD", phone: "9821433709" },

    { name: "Bombay Hospital", city: "Mumbai", country: "india", address: "Marine Lines, Mumbai 400020", contact: "Sucheta / Dr Reddy", email: "narsim73@rediffmail.com", services: "OPD + IPD", phone: "9820788236" },

    { name: "Apollo Hospital", city: "Mumbai", country: "india", address: "CBD Belapur, Navi Mumbai 400614", contact: "Deepak Chawla", email: "tpa_nm@apollohospitals.com", services: "IPD", phone: "9022981004" },

    { name: "Nanavati Hospital", city: "Mumbai", country: "india", address: "Vile Parle West, Mumbai 400056", contact: "Nilesh", email: "nilesh.dhivre@nanavatimaxhospital.org", services: "OPD + IPD", phone: "9152052063" },

    { name: "Wockhardt Hospital", city: "Mumbai", country: "india", address: "Mumbai", contact: "Sandeep", email: "", services: "OPD + IPD", phone: "8080697959" },

    { name: "Fortis Hospital Mulund", city: "Mumbai", country: "india", address: "Mulund Goregaon Link Rd, Bhandup West, Mumbai 400078", contact: "Ratnesh Raj", email: "ratnesh.raj@fortishealthcare.com", services: "OPD + IPD", phone: "8291913491" },

    { name: "Fortis Hiranandani Hospital", city: "Mumbai", country: "india", address: "Vashi, Navi Mumbai 400703", contact: "Shweta Roy", email: "international.vashi@fortishealthcare.com", services: "OPD + IPD", phone: "9969303137" },

    { name: "S L Raheja Hospital", city: "Mumbai", country: "india", address: "Mahim West, Mumbai 400016", contact: "Hiral Sarin", email: "intl.marketing@rahejahospital.com", services: "OPD + IPD", phone: "9821305655" },

    { name: "Reliance Foundation Hospital", city: "Mumbai", country: "india", address: "Girgaon, Mumbai 400004", contact: "Tariq Nawab", email: "rfh.admission@rfhospital.org", services: "IPD", phone: "9891904455" },

    { name: "Lilavati Hospital", city: "Mumbai", country: "india", address: "Bandra West, Mumbai 400050", contact: "Vaishali / Sachin Nayak", email: "tpa@lilavatihospital.com", services: "IPD", phone: "9920939776" },

    { name: "Kokilaben Dhirubhai Ambani Hospital", city: "Mumbai", country: "india", address: "Andheri West, Mumbai 400053", contact: "Moumita", email: "", services: "IPD", phone: "9320146661" },

    { name: "Criticare Multispeciality Hospital", city: "Mumbai", country: "india", address: "Juhu, Mumbai 400049", contact: "Anand / Dr Deepak", email: "cashlesscriticarejuhu@gmail.com", services: "IPD", phone: "9820345552" },

    { name: "CritiCare Hospital", city: "Mumbai", country: "india", address: "Andheri East, Mumbai 400069", contact: "Dr Deepak Namjoshi", email: "criticarehospitalandheri@gmail.com", services: "IPD", phone: "02226231666" },

    { name: "Smile Care", city: "Mumbai", country: "india", address: "Bandra West, Mumbai 400050", contact: "Dr Vaishali Karad", email: "drvaishalikarad@gmail.com", services: "OPD", phone: "9821142470" },

    { name: "Global Eye Clinic", city: "Mumbai", country: "india", address: "Ghatkopar West, Mumbai 400086", contact: "Dr Hardik Parikh", email: "quality.global07@gmail.com", services: "OPD + IPD", phone: "9500895970" },

    { name: "Jaslok Hospital", city: "Mumbai", country: "india", address: "Peddar Rd, Mumbai 400026", contact: "Aamir Masalawala", email: "aamir.masalawala@jaslokhospital.net", services: "OPD + IPD", phone: "9819147390" },

    { name: "Fortis Hospital Kalyan", city: "Mumbai", country: "india", address: "Kalyan West, Maharashtra 421301", contact: "", email: "", services: "OPD + IPD", phone: "" },

    { name: "Manipal Hospital", city: "Mysore", country: "india", address: "Siddique Nagar, Mysuru 570015", contact: "Sant Kumar", email: "sant.k@manipalhospitals.com", services: "OPD + IPD", phone: "9902096633" },

    { name: "Bhanavi Hospital", city: "Mysore", country: "india", address: "Kuvempu Nagar, Mysuru 570023", contact: "Prashanth", email: "prashanth.adn@gmail.com", services: "OPD + IPD", phone: "08212545454" },

    { name: "Brij Lal Hospital", city: "Haldwani", country: "india", address: "Nainital Rd, Uttarakhand 263139", contact: "Sumit", email: "tpa@brijlalhospital.org", services: "OPD + IPD", phone: "9717090975" },

    { name: "Orange Hospital", city: "Navsari", country: "india", address: "Udyog Nagar, Navsari 396445", contact: "", email: "drbhb@yahoo.in", services: "IPD", phone: "02637242200" },

    { name: "Wockhardt Hospital", city: "Nashik", country: "india", address: "Wadala Naka, Nashik 422001", contact: "Sandeep", email: "sandeep.s.kumar@wockhardthospitals.com", services: "OPD + IPD", phone: "8080697959" },

    { name: "Wockhardt Hospital", city: "Nagpur", country: "india", address: "North Ambazari Rd, Nagpur 440033", contact: "Sandeep", email: "sandeep.s.kumar@wockhardthospitals.com", services: "OPD + IPD", phone: "8080697959" },

    { name: "IVY Hospital", city: "Nawanshahr", country: "india", address: "Chandigarh Rd, Punjab 144514", contact: "Nikhil", email: "tpaivyhospitalnsr@gmail.com", services: "OPD + IPD", phone: "9988004977" },

    { name: "KIMS Hospital", city: "Nagercoil", country: "india", address: "Chunkankadai, Tamil Nadu 629003", contact: "Nitheesh / Anthony Morris", email: "", services: "OPD + IPD", phone: "" },

    { name: "Fortis Hospital", city: "Noida", country: "india", address: "Sector 62, Noida 201301", contact: "Neelam Chand", email: "ips.noida@fortishealthcare.com", services: "OPD + IPD", phone: "9811326539" },

    { name: "Max Multi Specialty Centre", city: "Noida", country: "india", address: "Sector 19, Noida 201301", contact: "Gargi", email: "fonoida@maxhealthcare.com", services: "OPD + IPD", phone: "8826011844" },

    { name: "Apollo Hospital", city: "Noida", country: "india", address: "Sector 26, Noida 201301", contact: "Hemant Joshi", email: "marketing.noida@apollohospitals.com", services: "IPD", phone: "9958444792" },

    { name: "Manipal Hospital", city: "Patiala", country: "india", address: "Bhupindra Rd, Patiala 147001", contact: "Barjeshpaul Singh", email: "barjeshpaul.singh@manipalhospitals.com", services: "OPD + IPD", phone: "8283877911" },

    { name: "Vivekananda Hospital", city: "Palampur", country: "india", address: "Banuri, Himachal Pradesh 176062", contact: "Bikash Bharati", email: "unit.head@vmipalampur.com", services: "OPD + IPD", phone: "9817878617" },

    { name: "Nallam Clinic", city: "Pondicherry", country: "india", address: "MG Road, Puducherry 605001", contact: "Kavita", email: "clinicnallam@gmail.com", services: "OPD + IPD", phone: "9751063620" },

    { name: "East Coast Hospital", city: "Pondicherry", country: "india", address: "Paris Nagar, Puducherry 605010", contact: "Jyoti Reddy", email: "echpondicherry@gmail.com", services: "OPD + IPD", phone: "9487765603" },

    { name: "KIMS Al Shifa Hospital", city: "Perinthalmanna", country: "india", address: "Valiyangadi, Kerala 679322", contact: "Anthony Morris", email: "", services: "OPD + IPD", phone: "" },

    { name: "Ruby Hall Clinic", city: "Pune", country: "india", address: "Sassoon Rd, Pune", contact: "Hansa Kotak", email: "health@rubyhall.com", services: "OPD + IPD", phone: "9881123351" },

    { name: "Manipal Hospital", city: "Pune", country: "india", address: "Baner, Pune", contact: "", email: "lalit.sasale@manipalhospitals.com", services: "OPD + IPD", phone: "8600300161" },

    { name: "Lokmanya Hospital", city: "Pune", country: "india", address: "Chinchwad, Pune", contact: "Gauri Sardesai", email: "international@lokmanyahospital.info", services: "IPD", phone: "9011097988" },

    { name: "Dr Ankur Sharma Clinic", city: "Pushkar", country: "india", address: "Ajmer Rd, Rajasthan 305001", contact: "Dr Ankur Sharma", email: "drankursharma89@yahoo.com", services: "OPD", phone: "9782084075" },

    { name: "Sterling Hospital", city: "Rajkot", country: "india", address: "Gandhigram, Rajkot 360007", contact: "Gaurav Chaturvedi", email: "corpdesk.rajkot@sterlinghospitals.com", services: "IPD", phone: "8797627334" },

    { name: "Wockhardt Hospital", city: "Rajkot", country: "india", address: "Kalawad Rd, Rajkot 360007", contact: "Sandeep", email: "tpa.rajkot@wockhardthospitals.com", services: "OPD + IPD", phone: "8080697959" },

    { name: "Yash Hospital", city: "Rajkot", country: "india", address: "Vidya Nagar, Rajkot 360002", contact: "Rohini", email: "yashhospital22@gmail.com", services: "OPD + IPD", phone: "9824069986" },

    { name: "Panacea Hospital", city: "Rishikesh", country: "india", address: "Adarsh Gram, Rishikesh 249201", contact: "Rohit Chandel", email: "rishikeshpanaceahospital@gmail.com", services: "OPD + IPD", phone: "8750937300" },

    { name: "Rainbow Children's Hospital", city: "Secunderabad", country: "india", address: "Vikrampuri Colony, Telangana 500009", contact: "", email: "", services: "IPD + OPD", phone: "04042462200" },

    { name: "Neotia Getwell Healthcare Centre", city: "Siliguri", country: "india", address: "Matigara, Siliguri 734010", contact: "Mr Acharjee", email: "corporate.slg@neotiahealthcare.com", services: "IPD", phone: "9830938364" },

    { name: "Paras Hospital", city: "Srinagar", country: "india", address: "Dalgate Bridge, Srinagar 190001", contact: "Dr Gautam Das", email: "kaushik.mukhopadhyay@parashospitals.com", services: "IPD", phone: "8132953440" },

    { name: "Metas Hospital", city: "Surat", country: "india", address: "Athwalines, Surat 395001", contact: "Dr Jatin Wagh", email: "metas.hospital@yahoo.com", services: "IPD + OPD", phone: "9574002122" },

    { name: "Bankers Hospital", city: "Surat", country: "india", address: "Udhna, Surat", contact: "Nishant", email: "tpa.bgh@bankersheart.com", services: "IPD + OPD", phone: "7990391833" },

    { name: "Shalby Hospital", city: "Surat", country: "india", address: "Adajan, Surat 395009", contact: "Ana", email: "medicaltourism.surat@shalby.in", services: "IPD", phone: "8140297053" },

    { name: "KIMS Hospital", city: "Trivandrum", country: "india", address: "Anayara, Trivandrum 695029", contact: "Anthony Morris", email: "ipr.tvm@kimshealth.org", services: "IPD + OPD", phone: "9847878182" },

    { name: "Ananthapuri Hospital", city: "Trivandrum", country: "india", address: "Enchakkal, Trivandrum 695024", contact: "Ashik", email: "ananthapurihri@gmail.com", services: "IPD", phone: "8089572790" },

    { name: "NIMS Hospital", city: "Trivandrum", country: "india", address: "Neyyattinkara, Kerala", contact: "Rajesh", email: "insurance@nimsmedicity.org", services: "IPD", phone: "7907791434" },

    { name: "GBH American Hospital", city: "Udaipur", country: "india", address: "Kothi Bagh, Udaipur 313001", contact: "Avanti Morvaniya", email: "insurance@gbhamericanhospital.com", services: "OPD + IPD", phone: "9314402333" },

    { name: "Aravali Hospital", city: "Udaipur", country: "india", address: "Ambamata, Udaipur 313004", contact: "Mahendra Mehta", email: "aravali_hospital@yahoo.com", services: "OPD + IPD", phone: "9352108108" },

    { name: "Heritage Hospital", city: "Varanasi", country: "india", address: "Lanka, Varanasi 221005", contact: "Latika", email: "corporate@heritagehospitals.com", services: "OPD + IPD", phone: "9984222269" },

    { name: "Chandra Mohan Hospital", city: "Varanasi", country: "india", address: "Orderly Bazar, Varanasi 221002", contact: "Dr Sanjay Pandey", email: "chandramohanhospital@gmail.com", services: "OPD + IPD", phone: "9415201981" },

    { name: "Sterling Hospital", city: "Vadodara", country: "india", address: "Race Course Rd, Vadodara 390007", contact: "", email: "sterlingbaroda.tpa@sterlinghospitals.com", services: "IPD", phone: "02656144111" },

    { name: "Spandan Multispeciality Hospital", city: "Vadodara", country: "india", address: "Manjalpur, Vadodara 390011", contact: "Kartik Shah", email: "marketing.spandan@gmail.com", services: "IPD", phone: "7819588574" },

    { name: "Welcare Hospital", city: "Vadodara", country: "india", address: "Atladara, Vadodara 390012", contact: "Harshida Modi", email: "md@welcarehospital.co.in", services: "IPD", phone: "9825124065" },

    { name: "SevenHills Hospital", city: "Visakhapatnam", country: "india", address: "Waltair Main Rd, Vizag 530002", contact: "GGK Mohana Rao", email: "vizag.billing@sevenhillshospital.com", services: "IPD", phone: "9848139922" },

    { name: "Manipal Hospital", city: "Vijayawada", country: "india", address: "Tadepalle, Vijayawada 522501", contact: "", email: "bikramjit@manipalhospitals.com", services: "OPD + IPD", phone: "" },

    { name: "NARUV Hospital", city: "Vellore", country: "india", address: "Collector Office Rd, Vellore 632004", contact: "Mr Srinivasan", email: "insurance@naruvhospitals.com", services: "IPD", phone: "8754016970" },

    { name: "Aster Hospital", city: "Wayanad", country: "india", address: "Wayanad, Kerala 673577", contact: "Vinup", email: "insurance.dmwims@gmail.com", services: "IPD", phone: "08606976229" },

    // other countires

    { name: "Evercare Hospital", city: "Dhaka", country: "bangladesh", address: "Plot 81, Block E, Bashundhara R/A, Dhaka 1229", contact: "Abul Kashem", email: "corporate@evercarebd.com", services: "OPD + IPD", phone: "008801708127491" },
    { name: "United Hospital", city: "Dhaka", country: "bangladesh", address: "Plot 15, Road 71, Dhaka", contact: "Israt", email: "billing@uhlbd.com", services: "IPD", phone: "008801627629433" },
    { name: "Evercare Hospital", city: "Chittagong", country: "bangladesh", address: "Ananna Residential Area, Oxygen, Chittagong", contact: "Ranjan / Rashadul", email: "corporate@evercarebd.com", services: "OPD + IPD", phone: "00880172903427" },
    { name: "Al Helal Specialised Hospital Ltd", city: "Dhaka", country: "bangladesh", address: "150 Begum Rokeya Sarani, Mirpur-10", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },

    { name: "ADK Hospital", city: "Male", country: "maldives", address: "Sosun Magu, Male 20070", contact: "Hassan", email: "frontoffice@adkhospital.com", services: "OPD + IPD", phone: "+9603313553" },
    { name: "Tree Top Hospital", city: "Male", country: "maldives", address: "Hulhumale", contact: "Ahmed Anees", email: "care@treetophospital.com", services: "OPD + IPD", phone: "+9603351610" },
    { name: "Kuramathi Medical Center and Hyperbaric Chamber", city: "Kuramathi", country: "maldives", address: "Universal Resorts", contact: "Dr. Michael Miller", email: "medicalcentre@kuramathi.com", services: "OPD + IPD", phone: "+9606660527" },
    { name: "Kuredu Medical Clinic and Hyperbaric Chamber", city: "Kuredu", country: "maldives", address: "Kuredu Island Resort", contact: "Dr. Ozgur", email: "clinic@providers.com", services: "OPD + IPD", phone: "+9607901754" },
    { name: "Bandos Clinic", city: "Bandos", country: "maldives", address: "North Male Atoll", contact: "NA", email: "clinic@bandos.com.mv", services: "OPD + IPD", phone: "+9606640088" },

    { name: "Clinique du Nord", city: "Port Louis", country: "mauritius", address: "Baie du Tombeau Rd", contact: "Kevin", email: "cdnord@intnet.mu", services: "OPD + IPD", phone: "+2302471056" },
    { name: "Aegle Clinic", city: "Central Flacq", country: "mauritius", address: "Francois Mitterrand Road", contact: "NA", email: "account@aegleclinic.mu", services: "OPD + IPD", phone: "+230240460" },
    { name: "Clinique Darné", city: "Curepipe", country: "mauritius", address: "Georges Guibert St", contact: "Nasreen", email: "cdbilling@clinique-darne.com", services: "IPD", phone: "+2306012300" },
    { name: "Wellkin Hospital", city: "Moka", country: "mauritius", address: "Royal Road, Moka", contact: "Sooreeta", email: "billing@wellkinhospital.com", services: "IPD", phone: "+2306051000" },
    { name: "Medicare Mauritius", city: "Coromandel", country: "mauritius", address: "Indian Ocean Medicare Center Ltd", contact: "Dr Aziz", email: "foondunaziz@yahoo.com", services: "OPD + HOUSE CALL", phone: "0023052522466" },

    { name: "CIWEC Clinic", city: "Kathmandu", country: "nepal", address: "Kapurdhara Marg", contact: "Alka", email: "travelmed@ciwec-clinic.com", services: "OPD + IPD", phone: "+97714424111" },
    { name: "Era Hospital", city: "Kathmandu", country: "nepal", address: "Puspala Path", contact: "Rashi", email: "info@eranepal.com", services: "OPD + IPD", phone: "+97714357722" },
    { name: "Vayodha Hospital", city: "Kathmandu", country: "nepal", address: "Kathmandu", contact: "Ravi Agarwal", email: "mgr.op@vayodhahospital.com", services: "OPD + IPD", phone: "+97714286428" },
    { name: "Swacon International Hospital", city: "Kathmandu", country: "nepal", address: "Rudramati Marg", contact: "Astha Joshi", email: "info@swaconhospital.com", services: "OPD + IPD", phone: "+97714462960" },
    { name: "Metro Kathmandu Hospital", city: "Kathmandu", country: "nepal", address: "Kathmandu", contact: "Rishma", email: "swaconnhospital@gmail.com", services: "OPD + IPD", phone: "+97714721515" },
    { name: "Norvic International Hospital", city: "Kathmandu", country: "nepal", address: "Kathmandu 44617", contact: "Ankit Agarwal", email: "ankit.agarwal@norvichospital.com", services: "OPD + IPD", phone: "+97715970032" },
    { name: "HAMS Hospital", city: "Kathmandu", country: "nepal", address: "Mandikhatar Road", contact: "Sushant Bhandari", email: "insurance@hamshospital.com", services: "OPD + IPD", phone: "+97714377404" },
    { name: "Grande Hospital", city: "Kathmandu", country: "nepal", address: "Tokha Rd", contact: "Archana Pradhan", email: "amritkhanna@grandehospital.com", services: "OPD + IPD", phone: "+97715159266" },

    { name: "Shifa International Hospital", city: "Islamabad", country: "pakistan", address: "Pitras Bukhari Rd", contact: "Aqeel / Tariq", email: "maslam@shifa.com.pk", services: "OPD + IPD", phone: "+92518464646" },
    { name: "Shifa International Hospital", city: "Faisalabad", country: "pakistan", address: "Main Jaranwala Rd", contact: "Muhammad Bin Tariq", email: "tariq@shifa.com.pk", services: "OPD + IPD", phone: "+92418740951" },
    { name: "Sarmad Hospital", city: "Jhelum", country: "pakistan", address: "Jhelum", contact: "Dr Ahmed", email: "sarmadhospitaljhelum@gmail.com", services: "OPD + IPD", phone: "+923345074185" },

    { name: "St. Luke’s Medical Center", city: "Manila", country: "philippines", address: "279 E Rodriguez Sr Ave", contact: "Bernadine Go-Lo", email: "bpo@stlukes.com.ph", services: "OPD + IPD", phone: "+639985822270" },
    { name: "St. Luke’s Medical Center", city: "Quezon City", country: "philippines", address: "279 E Rodriguez Sr Ave", contact: "Bernadine Go-Lo", email: "bpo@stlukes.com.ph", services: "OPD + IPD", phone: "+639985822270" },

    { name: "Samitivej Srinakarin Hospital", city: "Bangkok", country: "thailand", address: "488 Srinagarindra Rd", contact: "Phatthranit", email: "svhinternational@samitivej.co.th", services: "OPD + IPD", phone: "+6620222222" },
    { name: "Samitivej Hospital Thonburi", city: "Bangkok", country: "thailand", address: "337 Somdet Phra Chao Tak Sin Rd", contact: "Kenika", email: "svhinternational@samitivej.co.th", services: "OPD + IPD", phone: "+6624389000" },
    { name: "Samitivej Sriracha Hospital", city: "Chon Buri", country: "thailand", address: "8 Soi Laemket", contact: "Nicola", email: "svhinternational@samitivej.co.th", services: "OPD + IPD", phone: "+6638320300" },

    { name: "Bumrungrad Hospital", city: "Bangkok", country: "thailand", address: "33 Sukhumvit 3", contact: "Terada Sangratum", email: "assistance@bumrungrad.com", services: "IPD", phone: "+6620668888" },

    { name: "Siloam Hospitals", city: "Tangerang", country: "indonesia", address: "Lippo Village", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "Siloam Hospitals Kelapa Dua", city: "Kelapa Dua", country: "indonesia", address: "Jl Kelapa Dua Raya", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },

    { name: "Wattanapat Hospital Ao Nang", city: "Krabi", country: "thailand", address: "555 Moo 5, Klong Hang Rd, Ao Nang, Krabi 81000", contact: "NA", email: "wichitra.su@aonanghospital.com", services: "OPD + IPD", phone: "+6675815555" },
    { name: "Wattanapat Hospital Trang", city: "Trang", country: "thailand", address: "247/2 Phatthalung Rd, Trang 92000", contact: "NA", email: "NA", services: "OPD + IPD", phone: "+6675205555" },
    { name: "Wattanapat Hospital Koh Samui", city: "Koh Samui", country: "thailand", address: "Bo Put, Surat Thani 84320", contact: "NA", email: "NA", services: "OPD + IPD", phone: "+6677965889" },
    { name: "Takecare Clinic", city: "Krabi", country: "thailand", address: "PP Park Plaza, Ao Nang, Krabi 81180", contact: "NA", email: "NA", services: "OPD", phone: "0982863745" },

    { name: "Siloam Hospitals", city: "Tangerang", country: "indonesia", address: "Lippo Village, Tangerang 15811", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "Siloam Hospitals Kelapa Dua", city: "Kelapa Dua", country: "indonesia", address: "Jl Kelapa Dua Raya No.1001", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "Siloam Hospitals RSUS", city: "RSUS", country: "indonesia", address: "NA", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "Siloam Hospitals Agora", city: "Jakarta", country: "indonesia", address: "Jl Letjen Suprapto Kav 1", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "Siloam Hospitals Kebon Jeruk", city: "Jakarta", country: "indonesia", address: "Jl Raya Pejuangan Kav 8", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "Siloam Hospitals Mampang", city: "Jakarta", country: "indonesia", address: "Jl Mampang Prapatan Raya No.16", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "Siloam Hospitals Surabaya", city: "Surabaya", country: "indonesia", address: "Jl Raya Gubeng No.70", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "Siloam Hospitals Paal Merah", city: "Jambi", country: "indonesia", address: "Jl Soekarno Hatta", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "Siloam Hospitals Balikpapan", city: "Balikpapan", country: "indonesia", address: "Jl MT Haryono", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "MRCCC Siloam Hospitals", city: "Jakarta", country: "indonesia", address: "Semanggi, Jakarta", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },

    { name: "BIMC Hospital", city: "Nusa Dua", country: "indonesia", address: "Kawasan BTDC, Bali", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "BIMC Hospital", city: "Kuta", country: "indonesia", address: "Bypass Ngurah Rai No.100X", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "BIMC Clinic Ubud", city: "Ubud", country: "indonesia", address: "Jl Raya Sanggingan No.21", contact: "Putri Widya", email: "admin.ubud@bimcbali.com", services: "OPD", phone: "+62811399552" },
    { name: "Kuta Emergency", city: "Lombok", country: "indonesia", address: "Jl Raya Kuta Mong", contact: "NA", email: "gop@kutaemergency.co.id", services: "OPD + IPD", phone: "+620370650240" },
    { name: "Griya Penida Medical", city: "Nusa Penida", country: "indonesia", address: "Br Sampalan", contact: "NA", email: "griyamedika23@gmail.com", services: "OPD", phone: "NA" },

    { name: "Mount Elizabeth Novena Hospital", city: "Singapore", country: "singapore", address: "38 Irrawaddy Rd", contact: "Nakul", email: "cherwah.kho@ihhhealthcare.com", services: "OPD + IPD", phone: "+6563935723" },
    { name: "Mount Elizabeth Hospital", city: "Singapore", country: "singapore", address: "3 Mount Elizabeth", contact: "Nakul", email: "cherwah.kho@ihhhealthcare.com", services: "OPD + IPD", phone: "+6567372666" },
    { name: "Parkway East Hospital", city: "Singapore", country: "singapore", address: "321 Joo Chiat Place", contact: "Nakul", email: "cherwah.kho@ihhhealthcare.com", services: "OPD + IPD", phone: "+6563773737" },
    { name: "Gleneagles Hospital", city: "Singapore", country: "singapore", address: "6 Napier Rd", contact: "Nakul", email: "cherwah.kho@ihhhealthcare.com", services: "OPD + IPD", phone: "+6564737222" },

    { name: "Vietnam HCMC Family Medical Practice", city: "Ho Chi Minh City", country: "vietnam", address: "District 2 Medical Center", contact: "NA", email: "viet@vietnammedicalpractice.com", services: "OPD + IPD", phone: "+842835484544" },
    { name: "Vietnam HCMC Family Medical Practice", city: "Hanoi", country: "vietnam", address: "Kim Ma, Ba Dinh", contact: "Mr Viet", email: "viet@vietnammedicalpractice.com", services: "OPD + IPD", phone: "+84976634546" },

    { name: "Royal Angkor International Hospital", city: "Siem Reap", country: "cambodia", address: "National Route 6", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },
    { name: "Royal Phnom Penh Hospital", city: "Phnom Penh", country: "cambodia", address: "Street 271", contact: "NA", email: "NA", services: "OPD + IPD", phone: "NA" },

    { name: "Columbia Asia Hospital", city: "Johor", country: "malaysia", address: "Iskandar Puteri", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60333596969" },
    { name: "Gleneagles Medini", city: "Johor", country: "malaysia", address: "Medini Utara", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60333596969" },
    { name: "Regency Specialist Hospital", city: "Johor", country: "malaysia", address: "Masai", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60333596969" },
    { name: "Pantai Hospital Sungai Petani", city: "Kedah", country: "malaysia", address: "Sungai Petani", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60333596969" },
    { name: "KPJ Ipoh Specialist Hospital", city: "Ipoh", country: "malaysia", address: "Ipoh, Perak", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60333596969" },
    { name: "KPJ Perlis Specialist Hospital", city: "Perlis", country: "malaysia", address: "Kangar", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60333596969" },

    { name: "Ramsay Sime Darby Medical Centre Subang Jaya", city: "Subang Jaya", country: "malaysia", address: "No 1, Jalan SS12/1A, Subang Jaya, Selangor", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60333596969" },
    { name: "Ramsay Ara Damansara", city: "Shah Alam", country: "malaysia", address: "Lot 2, Jalan Lapangan Terbang Subang", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60333596969" },
    { name: "Sunway Medical Centre", city: "Subang Jaya", country: "malaysia", address: "5, Jalan Lagoon Selatan, Bandar Sunway", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60374919191" },
    { name: "KPJ Ampang Puteri Specialist Hospital", city: "Ampang", country: "malaysia", address: "Jalan Mamanda 9, Ampang", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60342895000" },
    { name: "Columbia Asia Hospital Bukit Rimau", city: "Shah Alam", country: "malaysia", address: "Persiaran Anggerik Eria, Bukit Rimau", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60351259999" },

    { name: "Prince Court Medical Centre", city: "Kuala Lumpur", country: "malaysia", address: "39 Jalan Kia Peng, Kuala Lumpur", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60321600000" },
    { name: "Tung Shin Hospital", city: "Kuala Lumpur", country: "malaysia", address: "102 Jalan Pudu, Kuala Lumpur", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60320372288" },
    { name: "Pantai Hospital Kuala Lumpur", city: "Kuala Lumpur", country: "malaysia", address: "8 Jalan Bukit Pantai, Kuala Lumpur", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60322960888" },
    { name: "Gleneagles Kuala Lumpur", city: "Kuala Lumpur", country: "malaysia", address: "282 Jalan Ampang, Kuala Lumpur", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60341413000" },
    { name: "KLSMC Medical Centre", city: "Kuala Lumpur", country: "malaysia", address: "47 Jalan Dungun, Kuala Lumpur", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60320953888" },

    { name: "KPJ Seremban Specialist Hospital", city: "Seremban", country: "malaysia", address: "Kemayan Square, Seremban", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6067686000" },
    { name: "Columbia Asia Hospital Seremban", city: "Seremban", country: "malaysia", address: "Oakland Commercial Centre", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6066033988" },

    { name: "Kuantan Medical Centre", city: "Kuantan", country: "malaysia", address: "Jalan Tun Razak, Kuantan", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6095928282" },
    { name: "Pahang Medical Centre", city: "Kuantan", country: "malaysia", address: "Wisma MUIP, Kuantan", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6095138282" },

    { name: "Kuala Terengganu Specialist Hospital", city: "Kuala Terengganu", country: "malaysia", address: "Jalan Sultan Mahmud", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6096336866" },
    { name: "Salam Medical Centre", city: "Kuala Terengganu", country: "malaysia", address: "Jalan Engku Sar", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6096200200" },

    { name: "KPJ Perdana Specialist Hospital", city: "Kota Bharu", country: "malaysia", address: "Jalan Bayam, Kota Bharu", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6097458000" },
    { name: "Kota Bharu Medical Centre", city: "Kota Bharu", country: "malaysia", address: "Jalan Sultan Yahya Petra", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6097433399" },

    { name: "KPJ Sabah Specialist Centre", city: "Kota Kinabalu", country: "malaysia", address: "Jalan Damai, Sabah", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6088232000" },
    { name: "Gleneagles Kota Kinabalu", city: "Kota Kinabalu", country: "malaysia", address: "Riverson, Sabah", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6088518888" },
    { name: "Jesselton Medical Centre", city: "Kota Kinabalu", country: "malaysia", address: "Likas, Sabah", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6088366333" },

    { name: "Borneo Medical Centre", city: "Kuching", country: "malaysia", address: "Section 6 KTLD, Kuching", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6082507333" },
    { name: "Normah Medical Specialist Centre", city: "Kuching", country: "malaysia", address: "Petra Jaya, Kuching", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6082440055" },
    { name: "KPJ Kuching Specialist Hospital", city: "Kuching", country: "malaysia", address: "Jalan Stutong", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6082355777" },
    { name: "Miri City Medical Centre", city: "Miri", country: "malaysia", address: "Jalan Hokkien", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6085426622" },

    { name: "Pantai Hospital Ayer Keroh", city: "Melaka", country: "malaysia", address: "Ayer Keroh, Melaka", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6062319999" },
    { name: "Putra Specialist Hospital", city: "Melaka", country: "malaysia", address: "Jalan Bendahara", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6062835888" },
    { name: "Mahkota Medical Centre", city: "Melaka", country: "malaysia", address: "Jalan Merdeka", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+6062852999" },

    { name: "Dr Cheema Clinic", city: "Kuala Lumpur", country: "malaysia", address: "37 Jalan Tun HS Lee", contact: "Dr Cheema", email: "drsscheema@gmail.com", services: "OPD + IPD", phone: "0060178811330" },

    { name: "Care of Asia Network", city: "Ho Chi Minh City", country: "laos", address: "Indochina Park Tower", contact: "Tony Thai", email: "tony@careofasia.com", services: "OPD + IPD", phone: "+84904745109" },

    { name: "Global Assistance Partners", city: "Seoul", country: "south korea", address: "Jung-gu, Seoul", contact: "Yeonsue Chung", email: "operations@globalassistance.co.kr", services: "OPD + IPD", phone: "+8216700722" },

    { name: "Pan Africare", city: "Victoria", country: "seychelles", address: "Francis Rachel St", contact: "NA", email: "info@panafricare.com", services: "OPD", phone: "+2484321310" },

    { name: "GMCA Network", city: "Brunei", country: "brunei", address: "NA", contact: "NA", email: "ops@globalmedicalassistance.com", services: "OPD + IPD", phone: "+60333596969" },

    { name: "Care of Asia Network", city: "Yangon", country: "myanmar", address: "Indochina Park Tower", contact: "Tony Thai", email: "tony@careofasia.com", services: "OPD + IPD", phone: "+84904745109" }

];


export default HOSPITAL_NETWORK;