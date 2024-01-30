const is_english = true;
var jData ={
    "individual": [
        {
            "title": "<i>Bantuan Keluarga Malaysia (BKM)</i>",
            "description": "<p>Provision of direct cash assistance to targeted groups:</p>  <ul><li>Household (< RM2,500)*: RM1,000 - RM2,000</li> <li>Household (RM2,501 - RM5,000)*: RM400 - RM800</li> <li>Single Parents with Children (< RM5,000)*: Additional RM500</li> <li>Senior Citizen Household (< RM5,000)*: Additional RM300</li> <li>Single Senior Citizen (< RM5,000)*: Additional RM600</li> <li>Single (< RM2,500)*: RM350</li></ul> <p>*<i>(Monthly Income)</i></p>",
            "profile": "I1INC1, I1DEP, I1AG2",
            "needs": [
                "I-FIN"
            ],
            "hashtag": "#Financial #B40 #BKM #SeniorCitizen #SingleParents #Single"
        },
        {
            "title": "<i>Skim Jaminan Kredit Perumahan</i>",
            "description": "<p>Government will be providing guarantees to banks through the <i>Skim Jaminan Kredit Perumahan</i> to improve access to financing the gig workers, small business owners and farmers who face challenges in purchasing a home without  proof of fixed income</p>",
            "profile": "I1GIG",
            "needs": [
                "I-FIN"
            ],
            "hashtag": "#Financial #LoanFinancing #Housing #GigWorkers #SmallBusinessOwners #Farmers"
        },
        {
            "title": "e-Start",
            "description": "<p>Ease financial burden and foster a culture of cashless transactions among youths aged 18 to 20 as well as full-time students at institutions of higher learning</p>  <ul><li>RM150 will be credited as a one-off payment into the e-wallet accounts of youths</li></ul>",
            "profile": "I1STD, I1AG1",
            "needs": [
                "I-FIN"
            ],
            "hashtag": "#Financial #HigherEducationStudents #18-20Years #eStart "
        },
        {
            "title": "JaminKerja Hiring Incentive",
            "description": "<p>Job opportunities through employment incentive initiatives that cover the following categories:</p>  <ul><li><b> Job Seekers / Replacing Foreign Workers </b>: 20% of employee's salary for the first 6 months and 30% of the employee's salary for the last 6 months</li> <li><b> Vulnerable Groups / Women / ICT Sector / Tourism Sector </b>: 30% of employee's salary for the first 6 months and 40% of employee salaries for the last 6 months</li> <li><b> Apprentice </b>: Allowance of RM900 per month for a period of 6 months</li> <li><b> Gig Employees </b>: Incentive to work in the gig sector amounting to RM600 per month for a period of 6 months</li></ul>  <p>To apply for a job, explore the <a href ='https://www.myfuturejobs.gov.my/' >MyFutureJobs Portal </a></p>",
            "profile": "I1UNE",
            "needs": [
                "I-EMP"
            ],
            "hashtag": "#Employment #JobSeekers #Employer #JaminKerja"
        },
        {
            "title": "MySTEP",
            "description": "  <p>Programme for training and short term employment in the public sector (50,000 employment opportunities), Government Linked Companies (GLC) and strategic partners (30,000 employment opportunities)</p>",
            "profile": "I1UNE",
            "needs": [
                "I-EMP"
            ],
            "hashtag": "#Employment #JobSeekers #MySTEP #JaminKerja"
        },
        {
            "title": "Upskilling and Reskilling Programmes",
            "description": "<p>Programme to assist job seekers by providing skills training to increase employability and guaranteed placement into employment. Among the initiatives included under this program are:</p>  <ul><li>HRD Corp</li> <li><i>Koridor Wilayah</i> - IRDA, ECER, RECODA</li> <li>MDEC GLOW</li></ul>",
            "profile": "I1ALL",
            "needs": [
                "I-EDU"
            ],
            "hashtag": "#Employment #JobSeekers"
        },
        {
            "title": "Discount on Repayment of PTPTN Loans",
            "description": "<p>Discount on the repayment of PTPTN loans from 1 November 2021 till 30 April 2022</p>  <ul><li>Discount of 15% on the outstanding debt for full settlement</li> <li>Discount of 12% for repayment of at least 50% on the outstanding debt made in a single payment</li> <li>Discount of 10% for repayment through salary deductions or direct debit according to the repayment schedule</li></ul>",
            "profile": "I1ALL",
            "needs": [
                "I-EDU"
            ],
            "hashtag": "#Education #Financial #PTPTN"
        },
        {
            "title": "<i>PerantiSiswa Keluarga Malaysia</i>",
            "description": "<p>Supply a tablet to every B40 student in institutions of higher learning</p>",
            "profile": "I1INC1, I1STD",
            "needs": [
                "I-EDU"
            ],
            "hashtag": "#Education #Device #Students #B40"
        },
        {
            "title": "Early Schooling Assistance",
            "description": "<p>Reduces the burden on parents / guardians in preparing for face-to-face school reopenings by offering a  RM150 one-off early schooling assistance</p>",
            "profile": "I1DEP",
            "needs": [
                "I-FIN",
                "I-EDU"
            ],
            "hashtag": "#Financial #Education #SchoolStudents #Students"
        },
        {
            "title": "SOCSO Contributions for Self-Employed and Informal Workers",
            "description": "<p>Expanded social protection coverage under SOCSO  to self-employed and informal workers. This initiative will continue with matching contribution of 80% by the Government</p>   <p>This initiative extended to cover 9 new categories of the self-employed such as farmers, fishermen, hawkers, artists, travel agents and Community Rehabilitation workers</p>",
            "profile": "I1GIG",
            "needs": [
                "I-SOC"
            ],
            "hashtag": "#SocialProtection #Financial  #SelfEmployed #InformalWorkers "
        },
        {
            "title": "<i>Perlindungan Tenang</i> Voucher Programme",
            "description": "<p>Eligible B40 recipients are able to receive a RM75 voucher as financial assistance to purchase the Perlindungan Tenang products, including life and personal accident takaful. This voucher can also be used to help purchase a 150cc and below comprehensive motorcycle insurance policy from 1 January 2022</p>",
            "profile": "I1INC1",
            "needs": [
                "I-SOC"
            ],
            "hashtag": "#SocialProtection #Insurance #B40 #Tenang"
        },
        {
            "title": " <i>Program Rumah Mesra Rakyat</i>",
            "description": "<p>To help those who do not have a house or live in dilapidated houses but have land to build their own home</p>  <ul><li>Providing a subsidy of RM20,000 per unit, in addition to funding facilities and management fees to applicants</li>  <li>Home ownership for 3,000 house units</li></ul>",
            "profile": "I1INC1",
            "needs": [
                "I-SOC"
            ],
            "hashtag": "#SocialProtection #Housing #Financial "
        },
        {
            "title": "Vaccine Procurement and Cost of COVID-19 Treatment Materials",
            "description": "<p>The Government has signed agreements to procure 88,000,000 doses, which is equivalent to 140% of our population and this is sufficient to provide a third dose to all residents aged 12 years and above</p>   <p>In addition to the cost of vaccine, there are other requirements for us to combat COVID-19 such as medical supply, medical gases, reagents and consumables</p>",
            "profile": "I1ALL",
            "needs": [
                "I-HEA"
            ],
            "hashtag": "#Healthcare #Vaccine #COVID-19"
        },
        {
            "title": "Mental Health",
            "description": "<p>Strengthen mental health support services, counselling and psychosocial support, increase advocacy programmes and strengthen the role of NGOs as partners on mental health programmes</p>",
            "profile": "I1ALL",
            "needs": [
                "I-HEA"
            ],
            "hashtag": "#Healthcare #MentalHealth #NGO"
        },
        {
            "title": "Sponsorship of Medical Specialist Programmes and Dental Contract Officers",
            "description": "<p>The Sponsorship of Medical Specialist Programmes and Dental Contract Officers includes:</p>   <ul><li>An allocation of RM100 million for the benefit of 3,000 medical and dental contract officers</li>  <li>Extension of contracts of more than 10,000 medical, dental and pharmaceutical officers for a maximum of 4 years after their 2 years of compulsory service period</li></ul>",
            "profile": "I1ALL",
            "needs": [
                "I-HEA"
            ],
            "hashtag": "#Healthcare #ContractDoctors"
        },
        {
            "title": " <i>Yayasan Keluarga Malaysia</i>",
            "description": "<p>Efforts to protect the welfare, education and future of the orphans who have lost their parents due to COVID-19</p>",
            "profile": "I1ALL",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#Welfare #Orphan"
        },
        {
            "title": "TekunNita",
            "description": "<p>Funding programme under TEKUN to support women entrepreneurs, particularly those affected by COVID-19</p>",
            "profile": "I1FML",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#LoanFinancing #WomenEntrepreneurs #SingleMother "
        },
        {
            "title": "DanaNita",
            "description": "<p>Funding programme under MARA to support women entrepreneurs, particularly those affected by COVID-19</p>",
            "profile": "I1FML",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#LoanFinancing #WomenEntrepreneurs "
        },
        {
            "title": "Children’s Health Initiatives",
            "description": "<p>Three initiatives:</p>  <ul><li>Expansion of the Community Feeding Programme to children from urban poor families in the states of Kuala Lumpur, Putrajaya, Selangor, Johor, Pulau Pinang </li>  <li>Expanding the scope of recipients of the Rehabilitation Programme for Malnourished Children (PPKZM) by adding criteria for weight loss, disability, risk of eating disorders and anemia as well as underweight</li>  <li>Establish a Mothers' Milk Bank for premature babies in the Neonatal Care Unit of MOH hospitals in Pulau Pinang, Johor, Terengganu, Sabah and Sarawak</li></ul>",
            "profile": "I1ALL",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#Healthcare #Children "
        },
        {
            "title": "Strengthening TVET",
            "description": "<p>PERKASA TVET is a short-term training programme under <i>Perbadanan Tabung Pembangunan Kemahiran</i> (PTPK) to train 13,000 trainees</p>",
            "profile": "I1ALL",
            "needs": [
                "I-EDU"
            ],
            "hashtag": "#Education #TVET"
        },
        {
            "title": "Job Search Allowance",
            "description": "<p>Government will continue with the Job Search Allowance to:</p>  <ul><li>SOCSO Contributors - 80% of first month's salary, 50% of second to sixth months' salary and 30% of last three months' salary</li> <li>Non-SOCSO Contributors - RM300 allowance for a period of 3 months</li></ul>",
            "profile": "I1UNE",
            "needs": [
                "I-EMP"
            ],
            "hashtag": "#Employment #Financial #JobSeekers #JaminKerja"
        },
        {
            "title": "Subsidy for Child Safety Seats in Car",
            "description": "<p>Subsidy of 50% or up to RM150 for the purchase of child safety seats by B40 households</p>",
            "profile": "I1INC1, I1DEP",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#Financial #Security #Children "
        },
        {
            "title": "MyRail5 Pass",
            "description": "<p>A RM5 a month travel pass for unlimited travel on train services for the benefit school students</p>",
            "profile": "I1STD",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#SchoolStudents #DisabledPersons #TravelPass #Transportation "
        },
        {
            "title": "Women's Health Prevention Programme",
            "description": "<p>A subsidy for mammogram tests to high-risk women and to implement cervical cancer screening tests for women</p>",
            "profile": "I1FML",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#Healthcare #Financial #Women"
        },
        {
            "title": "Basic Women's Hygiene Kit",
            "description": "<p>Distribution of free basic personal hygiene kits every month to 130,000 B40 female teenagers</p>",
            "profile": "I1FML",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#Healthcare #B40Women #Teenagers"
        },
        {
            "title": "Women Leadership Foundation",
            "description": "<p>To boost women's participation in the economic sector through, among others, youth leadership training and entrepreneurship programmes</p>",
            "profile": "I1FML",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#Women #Training"
        },
        {
            "title": "mySalam",
            "description": "<p>mySalam scheme will be expanded to cover eligible  <i>Bantuan Keluarga Malaysia</i> (BKM) recipients and claims for medical device benefits will also be extended to dependents of eligible mySalam recipients</p>",
            "profile": "I1INC1",
            "needs": [
                "I-SOC"
            ],
            "hashtag": "#SocialProtection #Healthcare #B40 "
        },
        {
            "title": "i-Saraan Expansion",
            "description": "<p>Through the i-Saraan initiative, the Government will match a minimum of 15% from the voluntary contributions made by informal sector workers limited to a maximum of RM250 per year. This initiative will be expanded to include those aged between 55 and 60 years</p>",
            "profile": "I1GIG",
            "needs": [
                "I-SOC"
            ],
            "hashtag": "#SocialProtection #Contribution #InformalSectorWorker #EPF"
        },
        {
            "title": "Woman on Board",
            "description": "<p>Mandating at least one female Board member for all public listed companies</p>  <ul><li>This initiative will take effect from 1 September 2022 for large cap companies and from 1 June 2023 for the remaining listed companies.</li></ul>",
            "profile": "I1FML",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#Women"
        },
        {
            "title": "MyKasih Capital Programme",
            "description": "<p>Enable women to earn an income from home. Assistance in the form of basic business capital will be provided, in addition to guidance and training to undertake online businesses</p>",
            "profile": "I1FML",
            "needs": [
                "I-FIN",
                "I-VUL"
            ],
            "hashtag": "#LoanFinancing #Training #Women #Entrepreneurs "
        },
        {
            "title": "Independent Living Centres (ILC) and the Government Industrial Training and Rehabilitation Centre (PLPP)",
            "description": "<p>Independent Living Centres and the Government Industrial Training and Rehabilitation Centre to implement training and mentoring programmes for the disabled</p>",
            "profile": "I1OKU",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#Training #Disabled "
        },
        {
            "title": "Disabled Person's Motor Vehicle License",
            "description": "<p>Government will bear the full cost of Motor Vehicle Road Tax on all private vehicles owned by the disabled</p>",
            "profile": "I1OKU",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#Disabled #DisabledVehicleLicense"
        },
        {
            "title": "MySTEP OKU Quota",
            "description": "<p>A special quota of 1% is set aside from the MySTEP programme to be allocated for the disabled, to ensure availability of job opportunities</p>",
            "profile": "I1OKU",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#Employment #Disabled "
        },
        {
            "title": "My50",
            "description": "<p>Unlimited travel pass for bus and rail priced at RM50 monthly for commuters mainly in the Klang Valley</p>",
            "profile": "I1ALL",
            "needs": [
                "I-FIN"
            ],
            "hashtag": "#Financial #TravelPass #PublicTransport "
        },
        {
            "title": "Strengthening of OKU Sports Industry",
            "description": "<p>RM10 million is specifically allocated to expand the development of Disabled Sports and the implementation of the Disabled Sports League</p>",
            "profile": "I1OKU",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#Athelets #Disabled"
        },
        {
            "title": "Special Incentive for Teaching Aids",
            "description": "<p>RM100 one-off assistance for teachers under MOE to purchase teaching aids for the 2022 school year </p>",
            "profile": "I1STD",
            "needs": [
                "I-EDU"
            ],
            "hashtag": "#Financial #Education #MOETeachers"
        },
        {
            "title": "Reduction in Minimum EPF Contribution Rate",
            "description": "<p>Minimum EPF contribution rate by employees is reduced from 11% to 9% up to June 2022</p>",
            "profile": "I1NCIV",
            "needs": [
                "I-FIN"
            ],
            "hashtag": "#Financial #EPFContribution #EPF"
        },
        {
            "title": "<i>Program Kasih Suri Keluarga Malaysia</i>",
            "description": "<p>Providing social protection to housewives and widows by contributing to EPF and SOCSO, specifically to benefit those up to 55 years of age</p>",
            "profile": "I1FML",
            "needs": [
                "I-SOC"
            ],
            "hashtag": "#SocialProtection #Contribution #HouseWives #Widow #EPF "
        },
        {
            "title": "PERKESO Disability Scheme",
            "description": "<p>Increase of the minimum pension rate under the <i>Skim Keilatan</i> from RM475 to RM550</p>",
            "profile": "I1ALL",
            "needs": [
                "I-SOC"
            ],
            "hashtag": "#SocialProtection #Disabled #Pension"
        },
        {
            "title": "Increased Insured Salary Ceiling",
            "description": "<p>Increased insured salary ceiling from RM4,000 to RM5,000 to improve the overall social security coverage for the 9 million active workers covered by SOCSO</p>",
            "profile": "I1NCIV",
            "needs": [
                "I-SOC"
            ],
            "hashtag": "#SocialProtection #Insurance"
        },
        {
            "title": "<i>Program Penyelenggaraan Perumahan dan Tabung Penyelenggaraan Perumahan Malaysia</i>",
            "description": "<p>Assistance to repair houses under Perumahan Rakyat</p>",
            "profile": "I1INC1",
            "needs": [
                "I-SOC"
            ],
            "hashtag": "#SocialProtection #Housing #Infrastructure "
        },
        {
            "title": "Upgrade of Government Buildings Infrastructure to be OKU Friendly",
            "description": "<p>Provision for more specilised paths for the visually impaired</p>",
            "profile": "I1OKU",
            "needs": [
                "I-VUL"
            ],
            "hashtag": "#Infrastructure #Disabled "
        },
        {
            "title": "Special Needs Schools",
            "description": "<p>Funding for the purchase of teaching aids and to improve the facilities in special needs schools to strengthen the agenda for special needs education</p>",
            "profile": "I1STD",
            "needs": [
                "I-EDU"
            ],
            "hashtag": "#Education #Disabled #SpecialNeedsSchool #Infrastructure "
        },
        {
            "title": "Supplementary Food Programme (RMT)",
            "description": "<p>Provision of daily milk, with part of the procurement under this programme earmarked for local milk producers</p>",
            "profile": "I1INC1",
            "needs": [
                "I-EDU"
            ],
            "hashtag": "#SchoolStudents #MilkSupply "
        },
        {
            "title": "Bumiputera Institutions Educational Initiatives",
            "description": "<p>Allocation to Bumiputera institutions, which includes those under  MARA, UiTM and Yayasan Peneraju</p>  <ul><li>This allocation is provided for  educational loans as well as improving oneself via the enrolment in diploma level from certificate level programmes, in addition to efforts to produce more Bumiputera professionals in the areas of medicine, engineering and finance</li></ul>",
            "profile": "I1STD",
            "needs": [
                "I-EDU"
            ],
            "hashtag": "#Education #Bumiputera"
        },
        {
            "title": "Farmers Smart Card Takaful Protection Scheme",
            "description": " <p>Takaful coverage to all Pertubuhan Peladang Kawasan (PPK) members throughout Malaysia under the Farmers Smart Card Takaful Protection Scheme</p>",
            "profile": "I1GIG",
            "needs": [
                "I-SOC"
            ],
            "hashtag": "#SocialProtection #Farmers #Takaful "
        },
        {
            "title": "BSN & Agrobank Financing for Youth Entrepreneurs",
            "description": "<p>Financing plan by BSN and Agrobank specifically for youth entrepreneurs, to facilitate youths that plan to venture into entrepreneurship</p>",
            "profile": "I1AG1",
            "needs": [
                "I-FIN"
            ],
            "hashtag": "#LoanFinancing #YouthEntrepreneurs "
        },
        {
            "title": "Orang Asli Standard of Living Improvement Programme",
            "description": "<p>Increment of the Orang Asli Secondary School students' subsistence rate to RM4 per day</p>",
            "profile": "I1STD",
            "needs": [
                "I-FIN"
            ],
            "hashtag": "#SchoolStudents #Indigenous #LivingStandard "
        },
        {
            "title": "Active Lifestyle Cultivation Programme",
            "description": "<p>Allocations to implement programs such as cultivating an active lifestyle, Fit Forever and the National Sports Day</p>",
            "profile": "I1ALL",
            "needs": [
                "I-HEA"
            ],
            "hashtag": "#Sports #Health"
        },
        {
            "title": "Antiviral Drugs Procurement",
            "description": "<p>Government intends to procure antiviral drugs that have been found to be effective against various viruses including COVID-19</p>",
            "profile": "I1ALL",
            "needs": [
                "I-HEA"
            ],
            "hashtag": "#Health #Medicine"
        },
        {
            "title": "Tax Relief / Deduction on Self-Funded Booster Vaccines Related Costs",
            "description": "<p>Individual tax relief and tax deduction to employers on costs associated with the adoption of self-funded booster vaccines</p>",
            "profile": "I1ALL",
            "needs": [
                "I-HEA",
                "I-TAX"
            ],
            "hashtag": "#Health #Financial #TaxRelief #Vaccine #COVID-19"
        },
        {
            "title": "National Health Agenda",
            "description": "<p>A  National Health Awareness programme to foster a culture of healthy living as well as addressing non-communicable diseases such as diabetes, high blood pressure and obesity</p>",
            "profile": "I1ALL",
            "needs": [
                "I-HEA"
            ],
            "hashtag": "#Health"
        },
        {
            "title": "Clinical Management of Patients with Rare Diseases",
            "description": "<p>To strengthen the clinical management of Patients with Rare Diseases in Malaysia such as lysosomal</p>",
            "profile": "I1ALL",
            "needs": [
                "I-HEA"
            ],
            "hashtag": "#Health"
        },
        {
            "title": "Expansion of Excise Duty on Sugary Drink Products",
            "description": "<p>Expand the imposition of excise duty on sugary drink products in the form of pre-mixed chocolate or cocoa, malt, coffee and tea</p>",
            "profile": "I1ALL",
            "needs": [
                "I-HEA",
                "I-TAX"
            ],
            "hashtag": "#Health #Tax "
        },
        {
            "title": "Excise Duty on Liquid or Gel Products Containing Nicotine",
            "description": "<p>Excise duty on liquid or gel products containing nicotine that are used for electronic cigarettes and vaping</p>",
            "profile": "I1ALL",
            "needs": [
                "I-HEA",
                "I-TAX"
            ],
            "hashtag": "#Health #Tax"
        },
        {
            "title": "Placement of 100 Kiosks at UTCs",
            "description": "<p>100 kiosks with complete computer facilities will also be available at UTCs across the country to better allow the public's access to JPJ's online services such as renewing driver's license</p>",
            "profile": "I1ALL",
            "needs": [
                "I-SOC"
            ],
            "hashtag": "#JPJ #UTC"
        },
        {
            "title": "Extension of Individual Income Tax Relief For The Purchase of Mobile Phones, Computers and Tablets",
            "description": "<p>Extension of the special individual income tax relief of up to RM2,500 for the purchase of mobile phones, computers and tablets until 31 December 2022</p>",
            "profile": "I1ALL",
            "needs": [
                "I-FIN",
                "I-TAX"
            ],
            "hashtag": "#TaxRelief  #Financial #Devices #Digital #Technology"
        },
        {
            "title": "Individual Income Tax Relief for Up-Skilling and Self-Enhancement Course Fees",
            "description": "<p>Increase of individual income tax relief for up-skilling and self-enhancement course fees will be increased from RM1,000 to RM2,000 and extended to year of assessment 2023</p>  <p>Tax relief of up to RM7,000 for courses with professional bodies. Approved courses include professional courses in accounting, finance and Environmental, Social, Governance (ESG)-related</p>",
            "profile": "I1ALL",
            "needs": [
                "I-TAX"
            ],
            "hashtag": "#TaxRelief #Financial #Education #Training"
        },
        {
            "title": "Income Tax be imposed on Income Derived from Foreign Sources and Received in Malaysia",
            "description": "<p>Income tax will be imposed to residents in Malaysia on income derived from foreign sources and received in Malaysia from 1 January 2022</p>",
            "profile": "I1ALL",
            "needs": [
                "I-TAX"
            ],
            "hashtag": "#Tax #ForeignIncome"
        },
        {
            "title": "Expansion of Tax Relief for EPF Contributors",
            "description": "<p>Expansion of tax relief of up to RM4,000 for EPF contributors to also include voluntary contributions, such as those who are self-employed in the gig economy and pensionable civil servants</p>",
            "profile": "I1ALL",
            "needs": [
                "I-FIN",
                "I-TAX"
            ],
            "hashtag": "#TaxRelief #Financial #EPF #EPFContributions #GigWorkers"
        },
        {
            "title": "Increase of Tax Relief Limit on SOCSO Contributions",
            "description": "<p>Tax relief limit will be increased from RM250 to RM350 and the scope of relief for SOCSO contributions will also be expanded to cover employee contributions through the EIS to further encourage private employees to contribute to SOCSO and protect those who lose their jobs</p>",
            "profile": "I1ALL",
            "needs": [
                "I-TAX"
            ],
            "hashtag": "#TaxRelief  #Financial #SOCSO #SOCSOcontributions #EIS #PrivateEmployees"
        },
        {
            "title": "Accelerator Programme for G1 To G4 Youth Contractors",
            "description": "<p>The Government, via Construction Industry Development Board (CIDB) will develop a dedicated accelerator programme for G1 to G4 youth contractors, which will provide capacity building and on-the-job training</p>",
            "profile": "I1AG1",
            "needs": [
                "I-EMP"
            ],
            "hashtag": "#Construction #YouthContractors #OnTheJobTraining "
        },
        {
            "title": "Development of Local Electric Vehicles (EVs)",
            "description": "<p>The Government proposes to provide import duty, excise duty and sales tax exemptions on EVs as well as up to 100% road tax exemptions to the vehicle owners</p>   <p>Additionally, individual income tax reliefs of up to RM2,500 will be given for the purchase and installation, rental and hire-purchase of EV charging facilities as well as payment of EV charging facility subscription fees</p>",
            "profile": "I1ALL",
            "needs": [
                "I-FIN",
                "I-TAX"
            ],
            "hashtag": "#Financial #TaxRelief #ElectricVehicles #Sustainability"
        },
        {
            "title": "Individual Income Tax Relief For Fees Paid To Registered Childcare Centres Or Kindergartens",
            "description": "<p>Individual income tax relief of up to RM3,000 for fees paid to registered child care centres or kindergartens until the fiscal year of 2023</p>",
            "profile": "I1DEP",
            "needs": [
                "I-TAX"
            ],
            "hashtag": "#Financial #TaxRelief #ChildCareCentre"
        },
        {
            "title": "Incentives to Employers who Employ Apprentices",
            "description": "<p>Increase the monthly incentive from RM800 to RM900 for a period of up 6 months to employers who employ apprentices aged 18 - 30</p>",
            "profile": "I1UNE",
            "needs": [
                "I-EMP"
            ],
            "hashtag": "#Apprentices #Graduates"
        },
        {
            "title": "Extension of the Tax Incentive for the Structured Internship Programme",
            "description": "<p>Extension of the tax incentive for the Structured Internship Programme until the year of assessment 2025 and this incentive is also extended for students in the Master's Degree, Professional Certificate and Malaysian Skills Certificate Levels 1 and 2</p>",
            "profile": "I1ALL",
            "needs": [
                "I-TAX"
            ],
            "hashtag": "#Tax #Financial #Internship #Education"
        },
        {
            "title": "Extension of Sales Tax Exemption on CKD and CBU Vehicles",
            "description": "<p>Extension of the 100% sales tax exemption on CKD passenger vehicles and 50% on CBU including SUV and MPV for 6 months until 30 June 2022</p>",
            "profile": "I1ALL",
            "needs": [
                "I-FIN",
                "I-TAX"
            ],
            "hashtag": "#TaxExemption #Financial #Vehicles"
        },
        {
            "title": "Exemption on Entertainment Duty",
            "description": "<p>Exemption on entertainment duty for entertainment activities, including theme parks and cinemas, in all Federal Territories, as well as tourism tax exemption until 31 December 2022 to support the recovery of this sector</p>",
            "profile": "I1ALL",
            "needs": [
                "I-FIN",
                "I-TAX"
            ],
            "hashtag": "#TaxExemption #Financial #Entertainment #Travel"
        },
        {
            "title": "Special Individual Income Tax Relief for Domestic Tourism",
            "description": "<p>Special individual income tax relief for domestic tourism expenses up to RM1,000 to be extended until the fiscal year of 2022</p>",
            "profile": "I1ALL",
            "needs": [
                "I-TAX"
            ],
            "hashtag": "#TaxRelief #Financial #DomesticTourism"
        },
        {
            "title": "Sales Tax on Low Value Goods",
            "description": "<p>Sales tax will be imposed on goods not exceeding RM500 from abroad sold online by seller and sent to consumers in Malaysia via air courier service</p>",
            "profile": "I1ALL",
            "needs": [
                "I-TAX"
            ],
            "hashtag": "#Tax  #AirCourierService #E-Commerce"
        },
        {
            "title": "Increase in Rate of Stamp Duty",
            "description": "<p>Rate of stamp duty on contract notes is increased from 0.1% to 0.15% and the stamp duty limit of RM200 for each related contract note is abolished</p>  <ul><li>Brokerage services related to the trading of shares listed on Bursa Malaysia will be exempted</li></ul>",
            "profile": "I1ALL",
            "needs": [
                "I-TAX"
            ],
            "hashtag": "#Tax #Bursa #ListedCompanies"
        },
        {
            "title": "JKM Direct Cash Assistance & Welfare",
            "description": "<p>Welfare Eligibility Requirements for four categories of assistance under Social Welfare Department (JKM) increased from RM980 based  on 2016 Food Poverty Line (PGK) to RM1,169 based on 2019’s  PGK. The four assistances include:</p> <ul><li>Children Assistance</li> <li>Elderly Assistance</li> <li>Unemployment Assistance for OKU</li> <li>Federal General Assistance</li></ul>",
            "profile": "I1UNE, I1DEP, I1AG2",
            "needs": [
                "I-FIN"
            ],
            "hashtag": "#Financial #Poor #SeniorCitizen #Children #PWD"
        },
        {
            "title": "Expansion of Scope of Income Tax Relief on Medical Treatment Expenditure",
            "description": "<p>Expand the scope of individual income tax relief for full medical check-up expenses to cover the cost of check-up or consultation service related to mental health from registerd psychiatrists, clinical psychologists and registered counsellors</p>",
            "profile": "I1ALL",
            "needs": [
                "I-TAX"
            ],
            "hashtag": "#TaxRelief #MentalHealth #Counselling #Psychiatrist #Psychologist"
        },
        {
            "title": "Stamp Duty Exemption for <i>Perlindungan Tenang</i> Product, Insurance or Takaful Products",
            "description": "<p>Increase of stamp duty exemption for the <i>Perlindungan Tenang</i> to RM150 as well as other insurance or takaful products with a premium or contribution value not exceeding RM 150 for individuals and RM250 for Micro, Small and Medium Enterprises</p>",
            "profile": "I1ALL",
            "needs": [
                "I-TAX"
            ],
            "hashtag": "#Tax #Insurance #Takaful #MSME"
        },
        {
            "title": "Senior Citizen Assistance Programme - Socioeconomic assistance",
            "description": "<p>Funding allocated as socio-economic assistance for senior citizens</p>",
            "profile": "I1AG2",
            "needs": [
                "I-FIN"
            ],
            "hashtag": "#SeniorCitizen #SocioEconomic"
        },
        {
            "title": "Income Tax Exemption on e-Sports Tournament Prize Money",
            "description": "<p>Government proposes to allow an income tax exemption for e-Sports prize monies received overseas</p>",
            "profile": "I1ALL",
            "needs": [
                "I-TAX"
            ],
            "hashtag": "#TaxExemption #eSports"
        },
        {
            "title": "Real Property Gains Tax",
            "description": "<p>Government will not impose Real Property Gains Tax from the disposal of real property and shares in real property by individual citizen, permanent resident and other than company in the 6th year and onwards</p>",
            "profile": "I1ALL",
            "needs": [
                "I-TAX"
            ],
            "hashtag": "#Tax #Individuals #Companies #REIT"
        },
        {
            "title": "MITI Reskilling",
            "description": "<p>To address the skills gap and support industry moving up the value chain by upskilling over 20,000 talent, to support industry clusters such as MRO in Subang, E&E in Kulim and Chemicals in Gebeng</p>",
            "profile": "I1ALL",
            "needs": [
                "I-EDU"
            ],
            "hashtag": "#Upskilling #MRO #E&E #Chemicals"
        },
        {
            "title": "Collaboration with State Governments",
            "description": "<p>To upgrade TVET skills for over 5,000 workers through programs such as Oil & Gas Welding, Industrial Automation and Meister in Mechatronics, and through State Skills Development Centres such as in Sarawak, Johor and Pulau Pinang</p>",
            "profile": "I1ALL",
            "needs": [
                "I-EDU"
            ],
            "hashtag": "#Upskilling #TVET #IndustrialAutomation #Mechatronics  "
        }
    ],
    "business": [
        {
            "title": "MyKasih Capital Programme",
            "description": "<p>Enable women to earn an income from home. Assistance in the form of basic business capital will be provided, in addition to guidance and training to undertake online businesses</p>",
            "profile": "B1ENT",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #Training #Women #Entrepreneurs "
        },
        {
            "title": "<i>Semarak Niaga Keluarga Malaysia</i>-  Low Carbon Transition Facility",
            "description": "<p>Matching Grant to help MSMEs adopt sustainable and low carbon practices such as by increasing the use of sustainable raw materials and renewable energy</p>  <ul><li>Loan rate: up to 5%</li>  <li>Amount: Up to RM5 million</li>  <li>Duration: Up to 10 years</li></ul>",
            "profile": "B1MIC, B1SME",
            "needs": [
                "B-FIN",
                "B-MKT"
            ],
            "hashtag": "#LoanFinancing #MarketAccess #MSME #Sustainability "
        },
        {
            "title": "Malaysia Digital Nomad",
            "description": "<p>Creating a digital nomad community and ecosystem in Malaysia by using the tourism sector as a catalyst</p>  <p>(Digital nomads are those who generate income online without a fixed physical location)</p>",
            "profile": "B1ALL",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#Digital #Tourism "
        },
        {
            "title": "Shop Malaysia Online and Go-eCommerce Onboarding",
            "description": "<p>Assistance to local social enterprises, halal, handicraft, agricultural and local entrepreneurs to switch to digital services</p>",
            "profile": "B1ALL",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#e-Commerce #e-Payment #Digital #MSME"
        },
        {
            "title": "<i>Semarak Niaga Keluarga Malaysia</i>- BSN Microcredit",
            "description": "<p>Provision of microcredit financing with the following financing terms:</p> <ul><li>Loan rate: 0% for the first 6 months, 4% thereafter</li> <li>Moratorium: 6 months</li> <li>Amount: Up to RM75,000</li> <li>Tenure: Up to 5 years</li></ul>",
            "profile": "B1MIC",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #MSME "
        },
        {
            "title": "<i>Semarak Niaga Keluarga Malaysia</i>- AgroBank Microcredit",
            "description": "<p>Provision of microcredit financing with the following financing terms: </p> <ul><li>Loan rate: 0% for the first 6 months, 3% thereafter</li>  <li>Moratorium: 6 months</li>   <li>Amount: Up to RM75,000</li>  <li>Tenure: Up to 5 years</li></ul>",
            "profile": "B1MIC",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #MSME "
        },
        {
            "title": "<i>Semarak Niaga Keluarga Malaysia</i> - Alternative Financing",
            "description": "<p>To strengthen alternative financing through equity crowd funding and peer-to-peer financing, through matching grants for the Malaysia Co-Investment Fund (MyCIF), as well as investments by <i>Bank Pembangunan Malaysia Berhad</i> (BPMB)</p>",
            "profile": "B1ALL",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #SME"
        },
        {
            "title": "SME Digitalisation Grant Scheme",
            "description": "<p>The total funds for the SME Digitalisation Grant Scheme has been increased to RM200 million</p>",
            "profile": "B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#Financial #Digitalisation #MSME"
        },
        {
            "title": "Smart Automation Matching Grant",
            "description": "<p>Matching grants for the manufacturing and services sector to automate their business processes</p>",
            "profile": "B1MANU, B1SERV",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#Financial #Manufacturing #Services #Automation"
        },
        {
            "title": " <i>JaminKerja</i> Hiring Incentive",
            "description": "<p>Recruitment efforts through employment incentive initiatives that cover the following categories:</p>  <ul><li><b>Job Seekers / Replacing Foreign Workers</b>: 20% of employee's salary for the first 6 months and 30% of the employee's salary for the last 6 months</li> <li><b>Vulnerable Groups / Women / ICT Sector / Tourism Sector</b>: 30% of employee's salary for the first 6 months and 40% of employee salary for the last 6 months</li> <li><b>Apprentice</b>: Allowance of RM900 per month for a period of 6 months</li> <li><b>Gig Employees</b>: Incentive to work in the gig sector amounting to RM600 per month for a period of 6 months</li></ul>",
            "profile": "B1ALL",
            "needs": [
                "B-EMP"
            ],
            "hashtag": "#Financial #JobSeekers #Vulnerables #GigWorkers "
        },
        {
            "title": "Upskilling and Reskilling Programmes",
            "description": "<p>Programme to assist job seekers by providing skills training to increase employability and guaranteed placement into employment. Among the initiatives included under this program are:</p>  <ul><li>HRD Corp</li> <li><i>Koridor Wilayah</i> - IRDA, ECER, RECODA</li> <li>MDEC GLOW</li></ul>",
            "profile": "B1ALL",
            "needs": [
                "B-EMP"
            ],
            "hashtag": "#Employment #JobSeekers"
        },
        {
            "title": "Creative Industry Initiatives",
            "description": "<p>Reviving the creative industry's activities through:</p>  <ul><li>Digital Content Fund</li> <li>Digital Multimedia Content Project</li> <li>Film Incentive</li> <li><i>Perkasa Modal Insan</i> Programme</li></ul>",
            "profile": "B1CRT",
            "needs": [
                "B-CRT"
            ],
            "hashtag": "#Financial #Creative "
        },
        {
            "title": "Investment Loan Matching Scheme",
            "description": "<p>For the National Animation Platform initiative which will be operated by MyCreative Ventures</p>",
            "profile": "B1CRT",
            "needs": [
                "B-CRT"
            ],
            "hashtag": "#LoanFinancing #Creative #Animation"
        },
        {
            "title": "Special Assistance to the Tourism Industry",
            "description": "<p>Special assistance to more than 20,000 tour operators registered under the Ministry of Tourism, Arts and Culture for a period of 3 months</p>  <ul><li>Tour Guide cash assistance of RM500 per month</li> <li>Cash assistance to TOBTAB Travel Agency and 362 MM2H of RM3,000 per month</li> <li>Assistance to Homestay experience operators registered under MOTAC of RM600 per month</li> <li>Cash assistance to Spa/Foot Massage operators registered under MOTAC of RM1,000 per month</li> <li>Cash assistance to craft entrepreneurs of RM500 per month</li></ul>",
            "profile": "B1TOU",
            "needs": [
                "B-TOU"
            ],
            "hashtag": "#Tourism #Financial"
        },
        {
            "title": "Targeted Wage Subsidy Programme",
            "description": "<p>Provide RM600 per employee, limited to 500 employees, for 3 months</p>  <ul><li>Specifically for employers in the tourism sector who have experienced a decline in revenue of at least 30%, so that they can continue operations and prevent employees from losing their jobs and sources of income</li></ul>",
            "profile": "B1TOU",
            "needs": [
                "B-TOU"
            ],
            "hashtag": "#Financial #WageSubsidy #Tourism "
        },
        {
            "title": "Arts and Culture Matching Grants",
            "description": "<p>Granting of matching grants to companies that organise programmes related to arts and culture</p>",
            "profile": "B1TOU",
            "needs": [
                "B-TOU"
            ],
            "hashtag": "#Financial #Tourism #Arts #Culture"
        },
        {
            "title": "<i>Semarak Niaga Keluarga Malaysia</i> - Financing Scheme Programme - Targeted Relief and Recovery Facility (TRRF)",
            "description": "<p>Financing facilities established by BNM to provide recovery assistance and support to affected SMEs</p>  <ul><li>Loan rate: Up to 3.5% per annum (including guarantee fee)</li> <li>Moratorium facility: At least 6 months</li> <li>Amount: Up to RM500,000</li> <li>Duration: Up to 7 years (including moratorium period)</li></ul>",
            "profile": "B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #SME"
        },
        {
            "title": "<i>Semarak Niaga Keluarga Malaysia</i>- Financing Scheme Programme - Agrofood Facility",
            "description": "<p>A financing programme provided by BNM to increase food production for Malaysia and exported, with the following financing terms:</p>  <ul><li>Loan rate: Up to 3.75% per annum (including guarantee fee)</li> <li>Amount: Up to RM5 million</li> <li>Duration: Up to 8 years</li></ul>",
            "profile": "B1SME, B1AGRI",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #Agriculture "
        },
        {
            "title": "<i>Semarak Niaga Keluarga Malaysia</i>- Financing Scheme Programme - Agrofood Financing Fund",
            "description": "<p>A financing programme provided by Agrobank for micro enterprises affected by the COVID-19 pandemic with the following financing terms:<p>  <ul><li>Loan rate: 0% for the first 6 months, 3% thereafter</li> <li>Moratorium facility: Up to 6 months</li> <li>Amount: Up to RM500,000</li> <li>Duration: Up to 8 years</li></ul>",
            "profile": "B1MIC, B1AGRI",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #Agriculture "
        },
        {
            "title": "<i>Semarak Niaga Keluarga Malaysia</i>- Financing Scheme Programme - Skim Pembiayaan Informal dan Mikro (SPIM)",
            "description": "<p>Offering loans with priority given to informal and micro businesses with financing terms:</p>  <ul><li>Loan rate: 0%</li> <li>Moratorium facility: Up to 12 months</li> <li>Amount: Up to RM10,000</li> <li>Tenure: Up to 5 years (including moratorium)</li></ul>",
            "profile": "B1ENT, B1MIC",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #MicroEnterprise #InformalBusinessSector "
        },
        {
            "title": "<i>Semarak Niaga Keluarga Malaysia</i>- Financing Scheme Programme - i-Tekad Programme",
            "description": "<p>Social finance initiatives that offers initial capital, microcredit and structured training to microenterprises</p>",
            "profile": "B1MIC",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #MicroEnterprise"
        },
        {
            "title": "<i>Semarak Niaga Keluarga Malaysia</i>- Financing Scheme Programme - Indian Community Entrepreneur Development Scheme (SPUMI)",
            "description": "<p>Providing micro financing options for the socio-economic empowerment of the Indian community</p>",
            "profile": "B1ALL",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #SME #IndianEntrepreneurs "
        },
        {
            "title": "<i>Semarak Niaga Keluarga Malaysia</i>- Financing Scheme Programme - Improvement of Business Financing Guarantee Scheme",
            "description": "<p>Help affected companies secure new financing that under normal circumstances, would have been difficult to obtain</p>  <ul><li>Increase the business financing guarantee limit by up to RM10 billion, in addition to the RM20 billion announced under the PEMULIH package</li>  <li>80% financing guarantee of up to RM20 million on existing financing facilities that are to be restructured and rescheduled (R&R). The guarantee is over the repayment period of 36 months including the 12 months repayment moratorium</li>  <li>80% guarantee on new financing facilities including 12 months repayment moratorium</li></ul>",
            "profile": "B1ALL",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #BankGuarantee #SME"
        },
        {
            "title": "TekunNita",
            "description": "<p>Funding programme under TEKUN to support women entrepreneurs, particularly those affected by COVID-19</p>",
            "profile": "B1MIC, B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #WomenEntrepreneurs #SingleMother "
        },
        {
            "title": "DanaNita",
            "description": "<p>Funding programme under MARA to support women entrepreneurs, particularly those affected by COVID-19</p>",
            "profile": "B1ENT",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #WomenEntrepreneurs "
        },
        {
            "title": "Business Funding through Equity and Quasi-Equity Investment",
            "description": "<p>Funding will be allocated to support equity and quasi-equity investment schemes, led by SME Bank in collaboration with TERAJU and BSN</p>",
            "profile": "B1MIC, B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing "
        },
        {
            "title": "RESET Scheme (Rehabilitation and Support Through Equity)",
            "description": "<p>Prepared under <i>Bank Pembangunan Malaysia Berhad</i> (BPMB) to assist companies facing gearing or leverage financing schemes</p>",
            "profile": "B1ALL",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #Business"
        },
        {
            "title": "Business Recapitalisation Fund",
            "description": "<p>Prepared under BNM to assist companies facing gearing or leverage problems with financing terms:</p>  <ul><li>Lending rate: up 3.5% (for credit financing) + dividend (determined by equity financier)</li>  <li>Amount: up to RM5 million</li> <li>Duration: Up to 10 years (Details to be finalised later)</li></ul>",
            "profile": "B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #Business"
        },
        {
            "title": "Voluntary Carbon Market",
            "description": "<p>The Voluntary Carbon Market (or VCM) initiative will be launched under the advocacy of Bursa Malaysia</p>",
            "profile": "B1ALL",
            "needs": [
                "B-FIN",
                "B-MKT"
            ],
            "hashtag": "#MarketAccess #Sustainability "
        },
        {
            "title": "BSN & Agrobank Financing for Youth Entrepreneurs",
            "description": "<p>Financing plan by BSN and Agrobank specifically for youth entrepreneurs, to facilitate youths that plan to venture into entrepreneurship</p>",
            "profile": "B1ENT",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #YouthEntrepreneurs "
        },
        {
            "title": "BSN Financing Facility for Social and Sports Facilities Owner",
            "description": "<p>BSN will provide a financing facility entailing 0% interest rates for the first 6 months and a repayment moratorium of 6 months for social and sports facilities owners</p>",
            "profile": "B1GNL",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #Sports "
        },
        {
            "title": "Capacity Building & Financing Programmes",
            "description": "<p>Capacity building and financing programmes under Perbadanan Usahawan Nasional Berhad, TEKUN Nasional and Dana Kemakmuran Bumiputera</p>",
            "profile": "B1BUM",
            "needs": [
                "B-EMP",
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #BumiputeraEntrepreneurs "
        },
        {
            "title": "MyStartup",
            "description": "<p>MyStartup strategy will be executed in phases to benefit over 2,500 companies and create 5,000 job opportunities</p>",
            "profile": "B1ENT",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#Financial #StartUp #Entrepreneurs "
        },
        {
            "title": "Interim Stage Bus Support Fund (ISBSF)",
            "description": "<p>Funding assistance for stage bus operators</p>",
            "profile": "B1GNL",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#Financial #BusOperator"
        },
        {
            "title": "Industry4WRD",
            "description": "<p>Technological transformation towards Industrial Revolution 4.0 for SMEs as well as mid-tier companies in the manufacturing and services sectors</p>",
            "profile": "B1MANU, B1SERV",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#Manufacturing #Services #Digital #SME"
        },
        {
            "title": "Innovation Hub: Industrial Revolution 4.0",
            "description": "<p>Implementation of Innovation Hub:</p> <ul><li>Industrial Revolution 4.0 under Technology Park Malaysia</li>  <li>The innovation hub will be the one-stop centre for innovation ecosystem with the development of new emerging technology</li></ul>",
            "profile": "B1ALL",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#Innovation #Digital #Technology "
        },
        {
            "title": "Special Fund for Strategic Investment",
            "description": "<p>To attract strategic foreign investments by multinational companies, especially those that complement industry value chains and drive knowledge-based jobs creation as well as development opportunities for local SMEs</p>",
            "profile": "B1ALL",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#ForeignInvestment #SME "
        },
        {
            "title": "Aerospace Matching Grant",
            "description": "<p>Grant for Bumiputera SMEs to explore business opportunities in the aerospace industry</p>",
            "profile": "B1SME, B1GNL, B1BUM",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#Financial #Aerospace #SME #Bumiputera "
        },
        {
            "title": "Rubber Research Institute of Malaysia (RRIM)  Hydrobest",
            "description": "<p>To help improve the socio-economic status of B40 smallholder farmers, the Government will introduce and expand the use of Rubber Research Institute of Malaysia (RRIM) Hydrobest technology to smallholder farmers through a matching grant</p>",
            "profile": "B1AGRI",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#Financial #Farmers #B40"
        },
        {
            "title": "MSME Halal Product Digital Branding programme",
            "description": "<p>Funding allocated to the Halal Development Corporation to execute various programmes including the MSME Halal Product Digital Branding programme as an effort to develop more Halal MSMEs that are able to compete internationally</p>  <p>Facilitation involves a maximum cost of RM20,000 for each eligible MSME</p>",
            "profile": "B1MIC, B1SME",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#MarketAccess #MSME #Halal #DigitalBranding"
        },
        {
            "title": "MSME Halal Product Marketability programme",
            "description": "<p>Funding allocated to the Halal Development Corporation to execute various programmes including the outreach programmes as well as industry clinics, training programme, product development funding, preparation of business plans and marketing specifically for e-commerce, e-hailing and retail platforms or networks, business matching  sessions and promotion programs for Halal products produced by Malaysian MSMEs</p>",
            "profile": "B1MIC, B1SME",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#MarketAccess #MSME #Halal  #OutreachProgramme"
        },
        {
            "title": " <i>Jalinan GLC: Memperkasa PMKS</i>",
            "description": "<p>Initiative to help entrepreneurs through various initiatives such as consultation services and financial support with a collective allocation of RM5 billion</p>",
            "profile": "B1MIC, B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#Financial #MSME #Entrepreneurs "
        },
        {
            "title": "G1 to G4 Small and Medium Sized Projects",
            "description": "<p>Implementation of small  and medium sized projects for G1 to G4 contractors nationwide</p>   <p>This allocation includes:</p>  <ul><li>Road maintenance projects,</li> <li>Restore and repair infrastructures and facilities for public universities, polytechnics and community colleges</li>  <li>Other projects involving rural social amenities</li></ul>",
            "profile": "B1CON",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#MarketAccess #Infrastructure #Contractor "
        },
        {
            "title": "Small Scale Government Projects for Bumiputera Youths",
            "description": "<p>Encourage the participation of Bumiputera youths in small scale Government projects</p>",
            "profile": "B1CON",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#MarketAccess #Bumiputera #Youths"
        },
        {
            "title": "SME Techno Entrepreneur Incentive Programme",
            "description": "<p>SME Techno Entrepreneur Incentive Programme to increase crop production and food processing through the application of technology</p>",
            "profile": "B1SME, B1AGRI",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#TechnoEntrepreneurs #CropProduction #FoodProcessing "
        },
        {
            "title": "Buy Made in Malaysia Campaign, Malaysian Sales Program and Khazanah Alam Industry Direct Selling Programme",
            "description": "<p>Buy Malaysia Campaign, Malaysian Sales Programme and Khazanah Alam Industry Direct Selling Program with an allocation to support local handicrafts and natural resources</p>",
            "profile": "B1ALL",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#MarketAccess #MalaysiaProduct "
        },
        {
            "title": "Matching grants for Budget Hotels and Homestay Repairs",
            "description": "<p>Matching grants for repair purposes to budget hotels registered under MOTAC as well as registered home stay owners</p>",
            "profile": "B1TOU",
            "needs": [
                "B-TOU"
            ],
            "hashtag": "#Financial #Tourism #Hotel"
        },
        {
            "title": "Promotional Activities and Domestic Tourism Incentive Fund",
            "description": "<p>Incentive fund for the purpose of promotional activities as well as domestic tourism</p>  <ul><li>Discount Vouchers and Rebates</li> <li>Promotion and Advertising</li> <li>Arts and Culture Tourism Support Fund to promote domestic tourism through promotion and publicity to tourism operators</li></ul>",
            "profile": "B1TOU",
            "needs": [
                "B-TOU"
            ],
            "hashtag": "#Financial #Tourism #Domestic "
        },
        {
            "title": "PENJANA Tourism Financing",
            "description": "<p>Financing Terms:</p>  <ul><li>Loan rate: up to 3.5% per annum (including guarantee rate)</li> <li>Size: Up to RM300,000</li> <li>Duration: Up to 7 years (including moratorium period)</li> <li>Moratorium: at least 6 months</li></ul>",
            "profile": "B1TOU",
            "needs": [
                "B-FIN",
                "B-TOU"
            ],
            "hashtag": "#PENJANA #Tourism #Loans #Funding"
        },
        {
            "title": "Maintenance of Tourism Infrastructure",
            "description": "<p>Maintenance of tourism infrastructures including the <i>Sultan Abdul Samad Building</i> and <i>Lembah Bujang in Kedah, Carcosa Seri Negara</i> and <i>Lombong Sungai Lembing</i> at Pahang</p>",
            "profile": "B1TOU",
            "needs": [
                "B-FIN",
                "B-TOU"
            ],
            "hashtag": "#Tourism #Infrastructure "
        },
        {
            "title": " <i>Keluarga Malaysia</i> Digital Economy Centres",
            "description": "<p>600 <i>Keluarga Malaysia</i> Digital Economy Centres will be transformed into One-Stop Centres to guide microentrepreneurs in using digital technology</p>",
            "profile": "B1MIC",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#MicroEntrepreneurs #Digitalisation #RuralCommunities"
        },
        {
            "title": "Tax Relief / Deduction on Self-Funded Booster Vaccines Related Costs",
            "description": "<p>Individual tax relief and tax deduction to employers on costs associated with the adoption of self-funded booster vaccines</p>",
            "profile": "B1ALL",
            "needs": [
                "B-TAX"
            ],
            "hashtag": "#Health #Financial #TaxRelief #Vaccine #COVID-19"
        },
        {
            "title": "Accelerator Programme for G1 To G4 Youth Contractors",
            "description": "<p>The Government, via Construction Industry Development Board (CIDB) will develop a dedicated accelerator programme for G1 to G4 youth contractors, which will provide capacity building and on-the-job training</p>",
            "profile": "B1CON, B1BUM",
            "needs": [
                "B-EMP"
            ],
            "hashtag": "#Construction #YouthContractors #OnTheJobTraining "
        },
        {
            "title": "Incentives to Employers who Employ Apprentices",
            "description": "<p>Increase the monthly incentive from RM800 to RM900 for a period of up 6 months to employers who employ apprentices aged 18 - 30</p>",
            "profile": "B1ALL",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#Apprentices #Graduates"
        },
        {
            "title": "Monsoon Season Assistance",
            "description": "<p>The Government will continue the Monsoon Season Assistance to help ease the living burden of 320,000 smallholder farmers who lost income during the monsoon season</p>",
            "profile": "B1AGRI",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#Financial #SmallholderFarmers"
        },
        {
            "title": "Special Individual Income Tax Relief for Domestic Tourism",
            "description": "<p>Special individual income tax relief for domestic tourism expenses up to RM1,000 to be extended until the fiscal year of 2022</p>",
            "profile": "B1TOU",
            "needs": [
                "B-TOU",
                "B-TAX"
            ],
            "hashtag": "#TaxRelief #Financial #DomesticTourism"
        },
        {
            "title": "<i>Cukai Makmur</i>",
            "description": "<p>One-off special windfall tax to the companies that generate extraordinary revenue</p>   <ul><li>Companies with chargeable income up to the first RM100 million will be subjected to income tax at a rate of 24% while the remaining chargeable income will be subject to income tax at the rate of 33% for the year of assessment 2022</li></ul>",
            "profile": "B1ALL",
            "needs": [
                "B-TAX"
            ],
            "hashtag": "#Tax #Companies"
        },
        {
            "title": "Service tax on Delivery Services",
            "description": "<p>Service tax is imposed on goods delivery services provided by delivery service providers including E-Commerce platform except for delivery services and logistic services for food & beverages</p>",
            "profile": "B1GNL",
            "needs": [
                "B-TAX"
            ],
            "hashtag": "#Tax #E-commerce #Delivery #Logistics"
        },
        {
            "title": "Increase in Rate of Stamp Duty",
            "description": "<p>Rate of stamp duty on contract notes is increased from 0.1% to 0.15% and the stamp duty limit of RM200 for each related contract note is abolished</p>  <ul><li>Brokerage services related to the trading of shares listed on Bursa Malaysia will be exempted</li></ul>",
            "profile": "B1ALL",
            "needs": [
                "B-TAX"
            ],
            "hashtag": "#Tax #Bursa #ListedCompanies"
        },
        {
            "title": "Double Tax Deduction to Companies that Provide Scholarships to Students In Institutions of Higher Learning",
            "description": "<p>Extension of double tax deduction to companies that provide scholarships to students in institutions of higher learning and will also expands to all fields of study</p>",
            "profile": "B1ALL",
            "needs": [
                "B-FIN",
                "B-TAX"
            ],
            "hashtag": "#TaxDeduction #Scholarship #Financial #University "
        },
        {
            "title": "Increase in the Windfall Levy Threshold Value For Palm Oil",
            "description": "<p>Increase windfall levy threshold value for palm oil from RM2,500 to RM3,000 for Peninsular Malaysia and from RM3,000 to RM3,500 for Sabah and Sarawak</p>   <p>Meanwhile, the Sabah and Sarawak levy rates are adjusted to 3% similar to the levy rates in the Peninsular</p>",
            "profile": "B1AGRI",
            "needs": [
                "B-TAX"
            ],
            "hashtag": "#Tax #PalmOil"
        },
        {
            "title": "Smallholder Farmer's Oil Palm Replanting Stimulus Scheme",
            "description": "<p>The Government has allocated funding to implement the Smallholder Farmers' Oil Palm Replanting Stimulus Scheme and to address the anti-palm oil campaign at the international level</p>",
            "profile": "B1AGRI",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#SmallholderFarmers #PalmOil"
        },
        {
            "title": "National Rubber Industry Transformation Programme",
            "description": "<p>This programme is aimed at merging smallholder farmers, rubber entrepreneurs and small cooperatives in a larger consortium, to be able to process rubber scraps into rubber creeps</p>",
            "profile": "B1AGRI",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#SmallholderFarmers #RubberEntrepreneurs #SmallCooperatives #Rubber"
        },
        {
            "title": "Initiatives to Increase Food Security",
            "description": "<p>Allocations are provided to implement initiatives to increase food security as follows:</p>  <ul><li>Food Security projects involving various states together with the Development of the Aquaculture Industry and Shellfish Estates in Johor</li>  <li>Development of the Park Programme of High Technology Food Production in Pahang</li> <li>National Food Security Strengthening Programme to provide logistic facilities and storage centres for high-tech food supplies and fresh agricultural produce for farmers and agro-food entrepreneurs</li>  <li>Ruminant Feed Incentive Assistance programme through the Subsidised Price Scheme for palm oil bran to enable small ruminant farmers to obtain a supply of feed at cheaper prices</li></ul>",
            "profile": "B1AGRI",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#MarketAccess #Agriculture #Food #Farmers"
        },
        {
            "title": "Cooperative Economic Recovery Intervention Financing Programme",
            "description": "<p>Cooperative Movement Economic Transformation Program (TRANSFER) to help affected cooperative activities to recover</p>",
            "profile": "B1ENT",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#FinancialAssistance #Cooperatives #TRANSFER #FoodTruck "
        },
        {
            "title": "Subsidies and Incentives for Agriculture and Fisheries Industry",
            "description": "<p>Granting of subsidies and incentives for the agriculture and fisheries industry will be continued with allocations for seed, fertilizer, price and paddy production subsidies including <i>huma</i> paddy fertilizer subsidy as well as fishermen's catch</p>",
            "profile": "B1AGRI",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#Subsidy #Agriculture #Fisheries "
        },
        {
            "title": "Strengthen Malaysia's Position as a Preferred Health Tourism Destination",
            "description": "<p>Allocation to the Malaysia Healthcare Travel Council to revitalise the international health tourism industry to strengthen Malaysia's position as a preferred health tourism destination</p>",
            "profile": "B1TOU",
            "needs": [
                "B-TOU"
            ],
            "hashtag": "#HealthcareTourism "
        },
        {
            "title": "Extension of Tax Deduction on The Cost of for Renovating and Refurbishing Business Premises",
            "description": "<p>Extension of tax deduction up to RM300,000 on the cost for renovating and refurbishing business premises until 31 December 2022 in order for businesses to comply with relevant SOP requirements such as ventilation and customer seating</p>",
            "profile": "B1ALL",
            "needs": [
                "B-FIN",
                "B-TAX"
            ],
            "hashtag": "#TaxDeduction #Financial #Renovation #Refurbishment #BusinessPremises #SOP"
        },
        {
            "title": "Tax Deduction on Rental Expenses of Employees' Accommodation Premises",
            "description": "<p>Tax deduction of up to RM50,000 on rental expenses of employees' accommodation premises will be extended until 31 December 2022 for companies registered under Safe@Work</p>",
            "profile": "B1MANU",
            "needs": [
                "B-FIN",
                "B-TAX"
            ],
            "hashtag": "#TaxDeduction #Financial #EmployeeAccomodation #Safe@Work"
        },
        {
            "title": "Opportunities for Participation in Government Procurement",
            "description": "<p>Simplify the requirements for registration where companies registering for the first time will only be required to pay RM150, including companies operating in SOHO business premises, shared partitions and coworking spaces</li></ul>",
            "profile": "B1ALL",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#CompanyRegistration #SOHO #CoWorkingSpaces "
        },
        {
            "title": "Business Travellers Center",
            "description": "<p>A one-stop centre will be established in Johor for Short-term Business Visitors from Singapore</p>",
            "profile": "B1ALL",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#BusinessVisitors #Singapore #Johor"
        },
        {
            "title": "Collaborative Research in Engineering, Science and Technology",
            "description": "<p>The Government will prepare an allocation via matching grants through Collaborative Research in Engineering, Science and Technology in areas such as Gallium Nitride for application in LEDs and electric vehicles</p>",
            "profile": "B1GNL",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#Financial #Engineering #Science #Technology #LEDs #ElectricVehicles"
        },
        {
            "title": "Specific Assistance for Entrepreneurs to Bounce Back",
            "description": "<p>To help entrepreneurs recover and fully bounce back in their business, the Government propose the following initiatives:</p>  <ul><li>Deferment of income tax instalment payments for MSMEs for six months until 30 June 2022</li> <li>All businesses are allowed to amend the estimated income tax payable on the 11th month before 31 October 2022</li> <li>Special tax deduction to the owners of buildings or business premises who provide rental reduction to tenants of at least 30% from the original rate to be extended until June 2022</li> <li>Accumulated unabsorbed business losses tax treatment that can be carried forward be reviewed from 7 consecutive years of assessment to a maximum of 10 consecutive years of assessment</li></ul>",
            "profile": "B1SME",
            "needs": [
                "B-FIN",
                "B-TAX"
            ],
            "hashtag": "#IncomeTaxInstalment #Financial #TaxDeduction #MSME"
        },
        {
            "title": "Trade and Investment Mission",
            "description": "<p>Allocation provided to explore high impact investments and new export markets</p>",
            "profile": "B1GNL",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#Market Access #Investments #ExportMarket"
        },
        {
            "title": "Industrial Cluster Training",
            "description": "<ul><li>Train 20,000 workers to support industrial clusters such as MRO in Subang, E&E in Kulim and Chemicals in Gebeng through MITI</li></ul>",
            "profile": "B1GNL",
            "needs": [
                "B-EMP"
            ],
            "hashtag": "#Training #TVET #OilandGas #IndustrialAutomation #Mechatronics"
        },
        {
            "title": "State Skills Development Centres",
            "description": "<p>State skills development centres, such as in Sarawak, Johor and Penang, to improve the TVET skills of 5,000 workers in areas such as oil and gas welding, industrial automation and mechatronic</p>",
            "profile": "B1GNL",
            "needs": [
                "B-EMP"
            ],
            "hashtag": "#Training #TVET #OilandGas #IndustrialAutomation #Mechatronics"
        },
        {
            "title": "Extension of the Additional Reinvestment Allowance (RA)",
            "description": "<p>The Government will extend the Additional Reinvestment Allowance (RA) for two years to existing companies in Malaysia that have exhausted their RA and Special RA eligibility, which will bring the cumulative Additional RA period to 5 years</p>",
            "profile": "B1ALL",
            "needs": [
                "B-FIN",
                "B-TAX"
            ],
            "hashtag": "#Tax #ReinvestmentAllowance"
        },
        {
            "title": "Special Voluntary Disclosure Programme",
            "description": "<p>Introduced by the Royal Malaysian Customs Department in phases with a penalty remission incentive of 100% for the first phase and a penalty remission of 50% for the second phase</p>",
            "profile": "B1ALL",
            "needs": [
                "B-TAX"
            ],
            "hashtag": "#PenaltyRemission"
        },
        {
            "title": "Stamp Duty Exemption for <i>Perlindungan Tenang</i> Product, Insurance or Takaful Products",
            "description": "<p>Increase of stamp duty exemption for the <i>Perlindungan Tenang</i> to RM150 as well as other insurance or takaful products with a premium or contribution value not exceeding RM 150 for individuals and RM250 for Micro, Small and Medium Enterprises</p>",
            "profile": "B1MIC, B1SME",
            "needs": [
                "B-TAX"
            ],
            "hashtag": "#Tax #Insurance #Takaful #MSME"
        },
        {
            "title": "Real Property Gains Tax",
            "description": "<p>Government will not impose Real Property Gains Tax from the disposal of real property and shares in real property by individual citizen, permanent resident and other than company in the 6th year and onwards</p>",
            "profile": "B1ALL",
            "needs": [
                "B-TAX"
            ],
            "hashtag": "#Tax #Individuals #Companies #REIT"
        },
        {
            "title": "Micro Enterprises Facility BNM",
            "description": "<p>Financing Terms:</p>  <ul><li>Lending rate: as determined by the financial institution</li>  <li>Size: Micro Enterprises (including part-time workers (gig workers) using digital platforms and self-employed workers): Up to RM 50,000</li> <li>Duration: Up ot 5 years</li></ul>",
            "profile": "B1MIC",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #MicroEnterprises #GigWorkers #Digital  "
        },
        {
            "title": "Jumpstart Financing MIDF",
            "description": "<p>Financing Terms:</p>  <ul><li>Loan rate: 2% - 3%</li>  <li>Size: Up to RM500,000</li>  <li>Tenure: Up to 7 years</li>  <li>Moratorium: 18 months</li></ul>",
            "profile": "B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #SME"
        },
        {
            "title": "Working Capital Scheme - BPMB",
            "description": "<p>Financing Terms:</p>  <ul><li>Loan rate: 4%</li>  <li>Size: RM1 million - RM10 million</li>  <li>Tenure: Up to 3 years</li></ul>",
            "profile": "B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #WorkingCapital"
        },
        {
            "title": "SME Recapitalisation Fund",
            "description": "<p>Investment scheme by SME Bank in collaboration with TERAJU and BSN through quasi-equity which enables companies with gearing problems to obtain new financing with more flexible financial space</p>  <ul><li>Lending rate: dividend  ± 6%</li>  <li>Size: Up to RM5 million </li> <li>Tenure: Up to 5 years</li>  <li>Moratorium: 6 months</li></ul>",
            "profile": "B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #SMEBank #TERAJU #BSN #QuasiEquity "
        },
        {
            "title": "IBS Promotion Fund (IBS 2.0)",
            "description": "<p>Financing Terms:</p>  <ul><li>Lending rate: risk based</li> <li>Size: Up to RM10 million</li>  <li>Tenure: Up to 15 years</li>  <li>Moratorium: none</li></ul>",
            "profile": "B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #SME #ConstructionSector"
        },
        {
            "title": "Young Entrepreneurs Fund - YEF 2.0",
            "description": "<p>Financing Terms:</p>  <ul><li>Loan rate: 5%</li> <li>Size: Up to RM1 million</li> <li>Tenure: Up to 10 years</li></ul>",
            "profile": "B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #Youth #Entrepreneurs"
        },
        {
            "title": "SME Automation and Digitalisation Facility",
            "description": "<p>Financing Terms:</p>  <ul><li>Loan rate: up to 4% per annum (including guarantee fee)</li> <li>Size: Up to RM3 million</li> <li>Duration: Up to 10 years</li></ul>",
            "profile": "B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #SME #Automation #Digitalisation"
        },
        {
            "title": "All Economic Sectors Facility",
            "description": "<p>Financing Terms:</p>  <ul><li>Loan rate: up to 7% per annum (including guarantee fee)</li> <li>Size: Up to Rm5 million</li> <li>Duration: Up to 5 years</li></ul>",
            "profile": "B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #SME"
        },
        {
            "title": "High Tech Facility – National Investment Aspirations",
            "description": "<p>Financing Terms:</p>  <ul><li>Loan rate: up to 3.5% per annum (excluding guarantee fee); up to 5% per annum (including guarantee fee)</li>  <li>Size: Up to RM1 million for working capital purposes; or up to RM5 mllion for capital expenditure (CAPEX) or a combination of working capital and CAPEX</li> <li>Duration: Up to 7 years</li></ul>",
            "profile": "B1SME",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #WorkingCapital #CAPEX"
        },
        {
            "title": "Extension of Tax Incentive for Organising Arts, Cultural, Sports and Recreational Activities in Malaysia",
            "description": "<p>Existing tax incentive to event organisers to be extended for 3 years to assist and support the arts, cultural, sports and recreational activities in Malaysia affected by the COVID-19 pandemic</p>",
            "profile": "B1ALL",
            "needs": [
                "B-TAX"
            ],
            "hashtag": "#Tax #Art #Cultural #SportsandRecreational"
        },
        {
            "title": "Expansion of Scope for Green Technology Tax Incentives",
            "description": "<p>Scope on the purchase of qualifying green assets and green services to be expanded to include Rainwater Harvesting System (RHS) projcets. This project must be verified by the Malaysian Green Technology Corporation (MGTC) to be eligible for tax incentives as follows:</p>  <p>Green Investment Tax Allowance (GITA)</p> <ul><li>Invesment Tax Allowance of 100% on capital expenditure for qualifying RHS activities. This allowance can be set-off against up to 70% of statutory income; or</li>  <p>Green Investment Tax Exemption (GITE)</p> <li>Income tax exemption of 70% of statutory income for qualifying RHS services activities</li></ul>",
            "profile": "B1GNL",
            "needs": [
                "B-TAX"
            ],
            "hashtag": "#Tax #GreenAssets #GreenServices #MGTC #RHS "
        },
        {
            "title": "National Regulatory Sandbox",
            "description": "<p>The National Regulatory Sandbox under the MOF's FUTURISE will be further enhanced to conduct industry studies and recommend measures to facilitate innovation in the community and improve the ease-of-doing-business</p>",
            "profile": "B1ALL",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#MOF #FUTURISE #Innovation #MarketAccess"
        },
        {
            "title": "Rubber Production Matching Grants",
            "description": "<p>Initiatives for the latex rubber sector including:</p>  <ul><li>Latex Production Incentive by Matching Grant to encourage latex production as well as increase the income of smallholders through cuplump production to latex production.</li>  <li>Grant to Latex Rubber Cooperatives/ Entrepreneurs for the purpose of purchasing a dry rubber content measuring machine (RRIMETER)</li></ul>",
            "profile": "B1AGRI",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#FinancialAssistance #LatexRubber #Smallholders "
        },
        {
            "title": "Be your Own Boss",
            "description": "<p>To encourage people to become entrepreneurs through the franchise system, PERNAS will provide financing of up to 90% or RM500,000 at a very competitive rate</p>  <ul><li>Maximum financing RM500,000</li>  <li>0% rate for the first 6 months</li>  <li>6-month moratorium</li></ul>",
            "profile": "B1ENT",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#Franchise #PERNAS #Entrepreneurs #LoanFinancing"
        },
        {
            "title": "Xcelerator",
            "description": "<p>Increase the number of local franchise brands registered in Malaysia Franchise Express (MyFEX), KPDNHEP</p>  <ul><li>Assist small and medium enterprises (SMEs) in terms of branding and marketing, product innovation including prototype development, digitalisation adaptation and technology use, and consultancy in terms of availability of documentation and SOP manuals, to improve and strengthen growing SME operations through franchise models</li></ul>",
            "profile": "B1SME",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#Franchise #MyFEX #SME"
        },
        {
            "title": "Business in Transformation",
            "description": "<p>Transforming micro and small enterprises (“SMEs”) into more modern, systematic, innovative concepts and adapting the use of technology so that they can be competitive in the market and produce more Bumiputera-owned franchise enterprises</p>",
            "profile": "B1SME, B1BUM",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#SME #Technology #Franchise #Bumiputera"
        },
        {
            "title": "Health Off-Take Agreement Programme",
            "description": "<p>Support the Health Off-Take Agreement Programme as well as review he potential epansion for the security and defence sectors to promote the devleopment of local industries</p>",
            "profile": "B1GNL",
            "needs": [
                "B-MKT"
            ],
            "hashtag": "#Security #Defence #LocalIndustries"
        },
        {
            "title": "Micro Financing-i ME2",
            "description": "<p>Provide loans to hawkers and small traders to upgrade food trucks or buy carts/ trailers/ tri-wheels including the cost of window dressing and special equipment/machines to make the business successful. The loan is given without interest rate (0%). Management cost  at the rate of 1% on the collection of repayment from the borrower. Provision of loans based on total cost as follows:</p>  <ul><li>Food truck - RM60,000 - RM100,000</li> <li>Food cart/ Trailer - RM40,000 - RM60,000</li> <li>Tricycle/ Tri-Wheel - RM20,000 - RM40,000</li></ul>",
            "profile": "B1ENT",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #Hawker #SmallTraders #FoodTruck"
        },
        {
            "title": "<i>Skim Pembiayaan Kontrak Ekspres (SPiKE)</i>",
            "description": "<p> Short-term financing facilities to <i>Bumiputera</i> contractors in construction, supply, service and electricity contracts</p>",
            "profile": "B1CON, B1SERV",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #Bumiputera #Contractor"
        },
        {
            "title": "Professional Financing Scheme (ProSPEC)",
            "description": "<p>A funding assistance provide business financing facilities under the ProSPEC and to increase the participation of Bumiputera entrepreneurs in the field of professional entrepreneurship</p>",
            "profile": "B1ALL",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #Bumiputera #Entrepreneurship"
        },
        {
            "title": "MARA Integrated Smart Auto (MISA)",
            "description": "<p>A funding assistance to increase the number of Bumiputera entrepreneurs in automotive that provide 3S (Sales, Service & Spare parts) and to provide opportunities and help entrepreneurs upgrade their existing workshop</p>",
            "profile": "B1ALL",
            "needs": [
                "B-FIN"
            ],
            "hashtag": "#LoanFinancing #Bumiputera #Automotive "
        }
    ],
    "community": [
        {
            "title": "Community Rehabilitation Programme",
            "description": "<p>Early intervention medium for children with disabilities to improve their skills and secure employment</p>",
            "category": "DEV",
            "hashtag": "#Training #Employment #VulnerableGroups"
        },
        {
            "title": "Maintenance of Tourism Infrastructure",
            "description": "<p>Maintenance of tourism infrastructures including the <i>Sultan Abdul Samad Building</i> and <i>Lembah Bujang in Kedah, Carcosa Seri Negara</i> and <i>Lombong Sungai Lembing</i> at Pahang</p>",
            "category": "INF",
            "hashtag": "#Tourism #Infrastructure "
        },
        {
            "title": "Special Shelters for Women",
            "description": "<p>Partnering with NGOs to increase the number of Special Shelters for Women</p>",
            "category": "NGO",
            "hashtag": "#NGO #Women  #SupportCentre"
        },
        {
            "title": "Mobile Clinics",
            "description": "<p>Expansion of mobile clinic services administered by University Teaching Hospitals in an effort to increase the health screenings and health education access in targeted localities</p>",
            "category": "RUR",
            "hashtag": "#Community #Healthcare #MobileClinic"
        },
        {
            "title": "Local Social Support Centres  (PSSS)",
            "description": "<p>Increase in number of Local Social Support Centres  to protect the welfare of more victims of domestic violence</p>",
            "category": "SS",
            "hashtag": "#KPWKM #SocialProtection #SupportCentre"
        },
        {
            "title": "The WAJA Squad",
            "description": "<p>Community awareness programmes on violence against women will be initiated across the country through the WAJA Squad</p>",
            "category": "SS",
            "hashtag": "#Welfare #Women #Community "
        },
        {
            "title": "Media Accessibility for Disabled Persons",
            "description": " <p>To improve the accessibility of the media as well as to ensure that disabled persons are kept up to date with current news and information, with the help of BERNAMA, all TV networks including private channels will provide sign language interpreters for their news programmes</p>",
            "category": "ALL",
            "hashtag": "#Disabled #Accessibility "
        },
        {
            "title": "National Digital Network Initiative (JENDELA)",
            "description": "<p>The government has provided this initiative to continue digital connectivity efforts in 47 industrial areas and 630 schools, especially those in rural areas</p>  <ul><li>The government will also provide internet facilities in 40 existing PPRs are under the management of KPKT and another 10 in the Federal Territory</li></ul>",
            "category": "DG",
            "hashtag": "#Community #Digital #School #RuralCommunities"
        },
        {
            "title": "5G Services",
            "description": "<p>5G services will be expanded to 36% of high-density areas including in major cities in Johor, Selangor, Penang, Sabah and Sarawak</p>",
            "category": "DG",
            "hashtag": "#Digital #5G"
        },
        {
            "title": "Socio-economic Empowerment of The Indian Community",
            "description": "<p>Socio-economic empowerment of the Indian community under the Malaysian Indian Transformation Unit (or MITRA) and funding under the Indian Community Entrepreneur Development Scheme (or SPUMI) by TEKUN</p>",
            "category": "DEV",
            "hashtag": "#LoanFinancing #IndianEntrepreneurs "
        },
        {
            "title": "Children in Sabah and Sarawak",
            "description": "<p>Initiative to encourage and educate children in Sabah and Sarawak to deepen their knowledge in culture and heritage</p>",
            "category": "RUR",
            "hashtag": "#Sabah #Sarawak #Children #Culture #Heritage "
        },
        {
            "title": "Sabah and Sarawak Subsidies for Air Transportation Services",
            "description": "<p>Subsidies for air transportation services for the benefit of Sabah and Sarawak rural residents</p>",
            "category": "RUR",
            "hashtag": "#Financial #AirTransportation #Sabah #Sarawak "
        },
        {
            "title": "Additional 20 Mobile Banks",
            "description": "<p>Additional 20 mobile banks are expected to begin operating, covering 250 rural areas and counties, mainly in Sabah and Sarawak</p>",
            "category": "RUR",
            "hashtag": "#Community #MobileBank #RuralCommunities #Sabah #Sarawak"
        },
        {
            "title": "Mobile JPJ Counters",
            "description": "<p><i>Jabatan Pengangkutan Jalan</i> (JPJ) will provide 20 Mobile JPJ counters to further facilitate public access especially in rural areas</p>",
            "category": "RUR",
            "hashtag": "#JPJ #MobileCounter #RuralCommunities"
        },
        {
            "title": "National Disaster Management Agency Preparedness",
            "description": "<p>Allocation will be provided to, amongst others, reduce the burden of flood victims via the distribution of food kits</p>",
            "category": "SS",
            "hashtag": "#Community #Assistance #Disaster"
        },
        {
            "title": "Malaysian Incentive Community Empowerment - MyICE",
            "description": "<p>Awarding of grants of up to RM10,000 to 2,000 associations registered with the Registrar of Societies Malaysia in the category of welfare, social, safety and basic rights</p>",
            "category": "NGO",
            "hashtag": "#Grant #RegisteredCorporations #Welfare"
        },
        {
            "title": "e-Sports",
            "description": "<p>Initiative for the Development of National e-Sports and allocation to create a drone sports centre-of-excellence  to boost the growth of e-Sports</p>",
            "category": "DEV",
            "hashtag": "#eSports #DroneSports"
        },
        {
            "title": "Frozen Zoo Programme",
            "description": "<p>Assistance for zoo operating costs, efforts to increase the breeding of Malayan Tigers and implementation of the Frozen Zoo programme to preserve the survival of endangered species</p>",
            "category": "ESG",
            "hashtag": "#Zoo #Financial #SpeciesSurvival"
        },
        {
            "title": "SDG Programme Initialising Fund",
            "description": "<p>Grants to support the role of the World Wildlife Fund (or WWF) and All-Party Parliamentary Group Malaysia (APPGM) as well as Environmental Partners</p>",
            "category": "NGO",
            "hashtag": "#Community #Grant #WWF #Environment #Wildlife"
        },
        {
            "title": "Matching Grant with The Contribution of GLC-Owned Foundations to NGOs",
            "description": "<p>Matching grant with the contribution of GLC-owned foundations to NGOs to fund various social programmes such as:</p>  <ul><li>Income generation and jobs creation for vulnerable groups in rural area</li> <li>Tackle mental health issues through awareness programmes and capacity development</li> <li>After school education and online teaching)</li> <li>Environmental conservation and animal welfare</li> <li>Preservation of arts and heritage</li> <li>Social enterprise</li></ul>",
            "category": "NGO",
            "hashtag": "#Grant #NGO #Vulnerables"
        },
        {
            "title": "National Infrastructure Development Projects",
            "description": "<p>Implementation of national infrastructure development projects such as the construction of the Pan Borneo Highway and Central Spine Road to ensure that efforts to stimulate economic recovery are intensified</p>",
            "category": "INF",
            "hashtag": "#Infrastructure #Development"
        },
        {
            "title": "Childcare in Government Buildings",
            "description": "<p>Provision for childcare in Government buildings, especially in public hospitals and universities</p>",
            "category": "SS",
            "hashtag": "#Children #Hospital #PublicUniversity #Childcare "
        },
        {
            "title": "Welfare of The Police and Armed Forces",
            "description": "<p>Allocation for maintenance and repair works for schools in military camps, military facilities and military quarters, namely <i>Rumah Keluarga Angkatan Tentera</i>. This includes the repair and replacement of lifts and PDRM quarters</p>",
            "category": "INF",
            "hashtag": "#Maintenance #Army #PDRM #School #RumahKeluarga"
        },
        {
            "title": " <i>Jalinan GLC CSR: SEJAHTERA RAKYAT</i>",
            "description": "<p>Initiatives such as medical device donations and scholarship programmes</p>",
            "category": "SS",
            "hashtag": "#MedicalEquipment #Scholarship "
        },
        {
            "title": "Repairs and Maintenance of Quarters and Buildings",
            "description": "<p>Allocation for the repairs and Maintenance of quarters and buildings under the supervision of the Property Management Division</p>",
            "category": "INF",
            "hashtag": "#Infrastructure #CivilServants"
        },
        {
            "title": "Islamic Secondary School in The Federal Territory of Labuan",
            "description": "<p>Build an Islamic secondary school in the Federal Territory of Labuan at a total cost of RM65 million</p>",
            "category": "DEV",
            "hashtag": "#IslamicSecondarySchool #Labuan"
        },
        {
            "title": "Additions 8 Border Control Posts under Pasukan Gerakan Am",
            "description": "<p>Add 8 border control posts under <i>Pasukan Gerakan Am</i> such as in Pagalungan in Sabah and Temong Mura in Sarawak to improve border monitoring and enforcement</p>",
            "category": "SS",
            "hashtag": "#SafetyAndSecurity"
        },
        {
            "title": "Additions Of 4 New Immigration Access Points",
            "description": "<p>Add 4 new immigration access points such as in Telok Melano and Baleh in Sarawak to meet the needs of increased cross border traffic following Indonesia's plan to move its capital to Kalimantan and the opening of the Telok Melano route under the Pan Borneo Highway</p>",
            "category": "SS",
            "hashtag": "#SafetyAndSecurity #Immigration"
        },
        {
            "title": "Collaboration with Red Crescent Society and St. John Ambulance",
            "description": "<p>Government will work with the Red Crescent Society and St. John Ambulance to improve access and responsiveness of ambulance services</p>",
            "category": "NGO",
            "hashtag": "#RedCrescentSociety #StJohnAmbulance "
        },
        {
            "title": "School Maintenance and Upgrading Works",
            "description": "<p>Allocation provided for school maintenance and upgrading works to more than 10,000 schools under the Ministry of Education including registered <i>tahfiz</i> schools, <i>rakyat</i> religious schools and <i>pondok</i> religious schools</p>",
            "category": "INF",
            "hashtag": "#School #MOE #TahfizSchool #ReligiousSchool #PondokReligiousSchool"
        },
        {
            "title": "Upgrade Dilapidated Schools",
            "description": "<p>Allocation provided to upgrade 112 and 165 dilapidated schools in Sabah and Sarawak respectively</p>",
            "category": "INF",
            "hashtag": "#Infrastructure #School #Sabah #Sarawak"
        },
        {
            "title": "Increase in Sabah and Sarawak Development Expenditure Allocation",
            "description": "<p>Sabah and Sarawak will receive an increase in development expenditure allocation for, among others, implementation of water, electricity, and road infrastructure projects, as well as for education and health facilities</p>",
            "category": "DEV",
            "hashtag": "#Welfare #Infrastructure #Education #Healthcare #Sabah #Sarawak"
        },
        {
            "title": "Regional Economic Development Corridors Development Projects",
            "description": "<p>Development projects will be continued for the five regional economic development corridors, comprising 6 new projects and 66 extension projects such as the Smart Agriculture project in Igan, Sarawak</p>",
            "category": "DEV",
            "hashtag": "#EconomicDevelopment"
        },
        {
            "title": "Infrastructure Facilitation Fund 3.0",
            "description": "<p>The Government has allocated funding through the creation of the Infrastructure Facilitation Fund 3.0 under the supervision of the Public Private Partnership Unit, Prime Minister's Office, to further boost high-impact infrastructure development activities through Public-Private Partnerships</p>",
            "category": "INF",
            "hashtag": "#Infrastructure"
        },
        {
            "title": "Sustainability <i>Sukuk</i>",
            "description": "<p>Government will issue Sustainability <i>Sukuk</i> denominated in Ringgit Malaysia to be channelled to eligible social or environmentally friendly projects</p>",
            "category": "ESG",
            "hashtag": "#Sustainability #Social #Environmental #Environmental, Social, Governance (ESG)"
        },
        {
            "title": "Initiative to Support United Nation Development Programme",
            "description": "<p>The Government will allocate funding to United Nations Development Programme (UNDP) in supporting their efforts in conducting various initiatives such as creating safe tourism and restoration activities in Mersing, Johor and Manjung, Perak</p>  <ul><li>Supports UNDP's initiative to provide funding grants for local startups, NGOs and SOEs implementing rural or inland community projects based on low carbon, green products and business competitiveness</li></ul>",
            "category": "ESG",
            "hashtag": "#UNDP #Tourism"
        },
        {
            "title": "The Government Social Impact Procurement Programme",
            "description": "<p>This programme was previously introduced on a pilot basis with the aim of increasing the opportunities for social enterprises to participate in Government procurements, which will be extended to all Ministries starting 2022</p>",
            "category": "ESG",
            "hashtag": "#SocialEnterprise #GovnermentProcurement"
        },
        {
            "title": "Tax Exemptions for Social Enterprise",
            "description": "<p>Provide tax exemptions on all social enterprise income for a period of up to 3 years of assessment subject to the validity period of Social Enterprise Accreditation from the Joint Committee on Accreditation of the Yayasan Hasanah and Ministry of Entrepreneur Development and Cooperatives</p>",
            "category": "ESG",
            "hashtag": " #TaxExemption  #SocialEnterprise"
        },
        {
            "title": "Implementation of Ecological Fiscal Transfer (EFT)",
            "description": "<p>Allocation provided every year to all states to institutionalise the implementation of Ecological Fiscal Transfer (EFT) for the conservation of biodiversity</p>",
            "category": "ESG",
            "hashtag": "#Biodiversity #Conservation #Environment"
        },
        {
            "title": "Nature & Biodiversity Conservation Initiative",
            "description": "<p>Government will be providing funding to various ministries to implement several initiatives as follows:</p>   <ul><li>Nature conservation projects  to address coastal erosion in Pantai Merdeka, Kedah and to overcome floods in Malacca</li>   <li>Programmes to empower the involvement of local communities, army veterans and <i>Orang Asli</i>, as biodiversity guardians of forest areas through the additional recruitment of up to 1,000 patrollers</li>   <li>The 100 million Tree Planting Campaign with a target to plant 20 million trees a year</li></ul>",
            "category": "ESG",
            "hashtag": "#Forests NatureConservation #Environment "
        },
        {
            "title": " <i>Rukun Tetangga</i> Area (KRT) Grant",
            "description": "<p>Provision of RM6,000 grant for each <i>Rukun Tetangga</i> Area (KRT) to support the agenda of unity and culture of volunteerism at the community level</p>",
            "category": "RUR",
            "hashtag": "#Volunteer #RunkunTetangga"
        },
        {
            "title": "Repairs, Maintenance and Small Development of Non-Muslim Houses of Worship",
            "description": "<p>Allocation provided for repairs, maintenance and small development of non-Muslim houses of worship in Local Authority areas</p>  <p>This provision also includes the implementation of community activities in collaboration with the management of the houses of worship and local residents</p>",
            "category": "INF",
            "hashtag": "#Repair #HouseofWorship #CommunityActivity"
        },
        {
            "title": "Building, Upgrading and Maintaining Sports Facilities Nationwide",
            "description": "<p>Allocation provided to build, upgrade and maintain sports facilities nationwide, which will be for, amongst others, the construction of a stadium in Bukit Merbau, Pasir Putih, Kelantan, spanning facilities such as a hockey field, shooting range and an aquatic centre</p>",
            "category": "INF",
            "hashtag": "#SportFacilities "
        },
        {
            "title": "Subsidy on Cost of Transportation and Distribution of Basic Goods to Rural Areas",
            "description": "<p>Allocation provided to subsidise the cost of transportation and distribution of basic goods to rural areas to ensure access to basic goods such as LPG and petrol at reasonable prices</p>",
            "category": "RUR",
            "hashtag": "#Financial #Rural #TransportationCost "
        },
        {
            "title": "Commodity Development Programmes",
            "description": "<p>Fundings allocated to further strengthen the development of rural communities, which will be channeled to:</p>   <ul><li>Federal Land Development Authority (FELDA) for the purpose of rehabilitation and development package for settlers; and</li>  <li>FELCRA participants; and  <li>The development of smallholder farmers in the rubber industry under Rubber Industry Smallholders Development Authority (RISDA)</li></ul>",
            "category": "RUR",
            "hashtag": "#Rural #CommunityDevelopment #Farmers"
        },
        {
            "title": "Improving The Well-Being of Rural Malaysians",
            "description": "<p>Government is committed to further improve the well-being of rural Malaysians in efforts to reduce the development gap between regions through the following:</p>  <ul><li>Rural and intervillage road projects spanning 519km</li> <li>Rural and alternative water supply with a target of 4,800 homes</li> <li>Rural electricity supply with a target of 2,100 homes</li> <li>7,000 new units of Kampung street lights and maintenance of more than 500,000 existing units of street lights, upgrade of 20 dilapidated bridges and preliminary works for the construction of a further 30 new bridges</li></ul>",
            "category": "RUR",
            "hashtag": "#Infrastructure #Wellbeing #Rural "
        },
        {
            "title": "Improving the Readiness of The Malaysian Armed Forces' Primary Assets",
            "description": "<p>This allocation will also involve replacing primary  equipment for PAKSAL and PASKAU like parachutes, diving equipment and boats</p>",
            "category": "SS",
            "hashtag": "#PASKAL #PASKAU #Military"
        },
        {
            "title": "Malaysian Research and Education Network (MyREN)",
            "description": "<p>Upgrade Malaysian Research and Education Network (MyREN) line access at institutes of higher education from 500Mbps to 10Gbps</p>",
            "category": "DG",
            "hashtag": "#Research #Education"
        },
        {
            "title": "Senior Citizen Assistance Programme - Pocket Money of Senior Citizen Institutions",
            "description": "<p>Funding allocated as pocket money of senior citizen institutions</p>",
            "category": "NGO",
            "hashtag": "#SeniorCitizen #PocketMoney"
        },
        {
            "title": "Senior Citizen Assistance Programme - NGO Operating Grants",
            "description": "<p>Grants provided especially for the operation of Elderly Care Institutions</p>",
            "category": "NGO",
            "hashtag": "#SeniorCitizen #CareInstitution"
        },
        {
            "title": "Senior Citizen Assistance Programme - Elderly Activity Centre",
            "description": "<p>Funding allocated to expand the Elderly Activity Centre and the Elderly Care Units across 170 Parliament areas and to strengthen them through:</p>  <ul><li>Premise renovations</li> <li>Purchase of premises furniture and fittings;</li> <li>Purchase of exercise equipment;</li> <li>IT facilities;</li> <li>Utility deposits</li></ul>",
            "category": "NGO",
            "hashtag": "#SeniorCitizen #CareUnit #ActivityCentre"
        },
        {
            "title": "Drone Sport Centre of Excellence",
            "description": "<p>To boost the growth of e-Sports, allocation is provided to create a drone sports centre-of-excellence, including the first ever permanent  drone racing facility in the ASEAN region</p>",
            "category": "INF",
            "hashtag": "#eSports #DroneSports"
        },
        {
            "title": "Environmental Pollution Programme",
            "description": "<p>Programs addressing environmental pollution that include:</p>  <ul><li>Environmental forensic laboratory</li> <li>Development of National River Trails @ DSK <i>(National River Trails)</i></li> <li>Desludging Activities of Major Mosques/Houses of Worship in Each State</li> <li>Improving preparedness and preparedness for geological disasters <li>Equipment and accessories to deal with the phenomenon of puddle floods</li></ul>",
            "category": "ESG",
            "hashtag": "#Environmental"
        },
        {
            "title": "Pilot Project for Biofuel Production and Rain Harvesting in Government Buildings",
            "description": "<p>Initiatives as follows:</p> <ul><li>Develop an implementation framework for biofuel production projects in combating climate change and biodiversity loss</li> <li>Pilot project for biofuel production and rain harvesting in Government buildings</li> <li>Non-Revenue Water</li></ul>",
            "category": "ESG",
            "hashtag": "#Environmental #Biofuel #Biodiversity #GovernmentBuilding"
        },
        {
            "title": "Ministry of Higher Education R&D Programmes",
            "description": "<p>Major programmes under the Ministry of Higher Education:</p>  <ul><li>International Research Matching Fund</li> <li>12MP Fundamental Research Fund</li> <li>Malaysian Higher Education Center of Excellence (Hicoe) Nic Field Empowerment Injection Fund, 12MP</li> <li>Strengthening and Empowerment of Research Universities (RU)</li> <li>Fundamental Research Fund</li> <li>Development of MOHE Research Management System</li></ul>",
            "category": "DEV",
            "hashtag": "#Research #Development #MinistryofHigherEducation"
        },
        {
            "title": "Digital Learning including Online Education Applications and Robotic Programmes",
            "description": "To augment education in schools, the Government will allocate funding to social enterprises in education to provide children from low-income communities with enhanced access to digital resources including online educational applications, programming and robotics</p>",
            "category": "DG",
            "hashtag": "#Education #SocialEnterprise #Digital #Robotic"
        }
    ]
}