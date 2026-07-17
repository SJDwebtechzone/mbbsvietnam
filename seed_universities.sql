-- SQL script to synchronize local universities table with the production list and order

-- 1. Ensure all columns exist (in case of fresh DB initialization)
ALTER TABLE universities ADD COLUMN IF NOT EXISTS slug TEXT;
ALTER TABLE universities ADD COLUMN IF NOT EXISTS location TEXT;
ALTER TABLE universities ADD COLUMN IF NOT EXISTS founded TEXT;
ALTER TABLE universities ADD COLUMN IF NOT EXISTS duration TEXT DEFAULT '6 Years';
ALTER TABLE universities ADD COLUMN IF NOT EXISTS description TEXT;
ALTER TABLE universities ADD COLUMN IF NOT EXISTS stats JSONB;
ALTER TABLE universities ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;
ALTER TABLE universities ADD COLUMN IF NOT EXISTS display_order INTEGER;

-- 2. Clear current records from universities table to avoid duplicates/outdated rows
TRUNCATE TABLE universities RESTART IDENTITY CASCADE;

-- 3. Insert the 8 universities in the correct display order
INSERT INTO universities (
  name, short_name, fee, image, slug, location, founded, duration, 
  description, highlights, stats, display_order, is_active
) VALUES 
(
  'University of Health & Sciences-Vietnam National University',
  'UHS-VNU',
  '5.5L',
  'https://tuyensinh.ctump.edu.vn/wp-content/uploads/2022/10/z3811887100300_bef3c95c3fb8bb0ee5c7d2d6c45d1fa4.jpg',
  'university-of-health-and-sciences-vietnam-national-university',
  'Ho Chi Minh City',
  'Est. 2008',
  '6 Years',
  'A premier medical university in Vietnam.',
  '[{"icon": "✅", "text": "NMC Approved University"}, {"icon": "🇬🇧", "text": "English Medium Program"}, {"icon": "🏥", "text": "Modern Hospital Training"}, {"icon": "💰", "text": "Affordable Fee Structure"}, {"icon": "🍛", "text": "Indian Food Available"}]',
  '[]',
  1,
  true
),
(
  'Nam Can Tho University',
  'NCTU',
  '3.9 lakhs',
  'https://tse2.mm.bing.net/th/id/OIP.w0nb7xayJadgGORvYN7B-wHaEq?rs=1&pid=ImgDetMain&o=7&rm=3',
  'nam-can-tho-university',
  'Can Tho, Vietnam',
  'Est. 2013',
  '6 Years',
  'Offering modern infrastructure and a curriculum aligned with global healthcare standards.',
  '[{"icon": "📘", "text": "Wide range of courses"}, {"icon": "🏥", "text": "Strong focus on medical & health sciences"}, {"icon": "👩‍⚕️", "text": "Practical & industry-based learning"}, {"icon": "✈️", "text": "International & modern learning environment"}, {"icon": "🎓", "text": "Scholarship & financial support"}]',
  '[]',
  2,
  true
),
(
  'Buon Ma Thuot Medical University',
  'BMU',
  '3.8 lakhs',
  'https://atlasmentor.com/wp-content/uploads/2024/07/Buon-Ma-Thuot-Medical-University-Vietnam.jpg',
  'buon-ma-thuot-medical-university',
  'Buon Ma Thuot, Dak Lak, Vietnam',
  'Est. 2007',
  '6 Years',
  'Located in the Central Highlands of Vietnam, this university provides quality medical education.',
  '[{"icon": "🏥", "text": "500+ bed multi-specialty teaching hospital on campus"}, {"icon": "👩‍⚕️", "text": "Affiliated with 12+ hospitals"}, {"icon": "📘", "text": "English-medium MBBS aligned with NMC"}, {"icon": "✈️", "text": "Around 5 hrs flight from India"}, {"icon": "🍛", "text": "Separate hostels with Indian food"}]',
  '[]',
  3,
  true
),
(
  'Cuu Long University',
  'UCL',
  '27 Lakhs',
  '/uploads/cuu_long.jpg',
  'cuu-long-university',
  'Vinh Long City',
  'Est. 2000',
  '6 Years',
  'Cuu Long University (Department of Health Sciences) is a top medical university in Vietnam, offering an English-medium medical education designed for Indian students with an NMC-aligned MBBS curriculum and attached teaching hospital for practical clinical training.',
  '[{"icon": "🎓", "text": "English-medium medical education for Indian students"}, {"icon": "✅", "text": "India-friendly NMC-aligned MBBS curriculum"}, {"icon": "🏥", "text": "Attached teaching hospital for clinical training"}, {"icon": "🔬", "text": "Well-equipped laboratories & training facilities"}, {"icon": "🏨", "text": "Air-conditioned hostels with Indian food"}, {"icon": "✈️", "text": "Only 4 hours travel from India by air"}]',
  '[]',
  4,
  true
),
(
  'Can Tho University of Medicine and Pharmacy',
  'CTUMP',
  '4 lakhs',
  'https://www.ctu.edu.vn/images/2022/08/12/hitech-2.jpg',
  'can-tho-university',
  'Can Tho City, Vietnam',
  'Est. 1979',
  '6 Years',
  'A premier public university known for its advanced research facilities.',
  '[{"icon": "🎓", "text": "43-Year-Old University"}, {"icon": "✅", "text": "NMC-Recognised for Indian Students"}, {"icon": "📘", "text": "Indian Curriculum"}, {"icon": "🩺", "text": "Early Clinical Exposure from 1st Year"}, {"icon": "🏨", "text": "Luxurious Hostel with Indian Food"}]',
  '[]',
  5,
  true
),
(
  'Phan Chau Trinh University',
  'PCTU',
  '7.2 lakhs',
  'https://medilearn.spatialdecisions.com/wp-content/uploads/2025/07/dai-hoc-phan-chau-trinh.jpg',
  'phan-chau-trinh-university',
  'Hoi An, Quang Nam, Vietnam',
  'Est. 2008',
  '6 Years',
  'A growing private university offering MBBS with a focus on community medicine.',
  '[{"icon": "🏥", "text": "Multi-specialty hospitals with 1500+ beds"}, {"icon": "👩‍⚕️", "text": "Training in 9 hospitals + internships"}, {"icon": "📘", "text": "100% English medium MBBS"}, {"icon": "✈️", "text": "Around 4.5 hrs flight from India"}, {"icon": "🍛", "text": "Hostels with Indian food"}]',
  '[]',
  6,
  true
),
(
  'Dai Nam University (DNU)',
  'DNU',
  '3.5 lakhs',
  'https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/asset/images/news/497529472_1116084437213279_3837768097926410454_n_1.jpg',
  'dai-nam-university',
  'Hanoi, Vietnam',
  'Est. 2008',
  '6 Years',
  'A well-established private university in Hanoi.',
  '[{"icon": "📜", "text": "NMC-compliant English-medium MBBS Program"}, {"icon": "🏥", "text": "Affiliated with 16+ Hospitals for Clinical Training"}, {"icon": "🧠", "text": "NEXT-Focused Curriculum & Indian Faculty Support"}, {"icon": "🍛", "text": "Hostel with Indian Food & Comfortable Living"}, {"icon": "✈️", "text": "Close to India — ~4-Hour Flight"}]',
  '[]',
  7,
  true
),
(
  'Dong A University',
  'DAU',
  '21 Lakhs',
  '/uploads/dong.jpg',
  'dong-a-university',
  'Da Nang, Vietnam',
  'Est. 2008',
  '6 Years',
  'NMC recognised private university in Da Nang, Vietnam offering MBBS in English medium.',
  '[{"icon": "🎓", "text": "Modern Campus in Da Nang"}, {"icon": "✅", "text": "NMC-Recognised for Indian Students"}, {"icon": "📘", "text": "English Medium Program"}, {"icon": "🍛", "text": "Hostel with Indian Food Available"}]',
  '[]',
  8,
  true
);
