--
-- PostgreSQL database dump
--

\restrict si5b6rYSBO3ZkDqukQLK5sgMcUWPGXUEUaqIlwL5kyqVt8SzMxppVAveVoENhyK

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-05-24 10:50:36

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 223 (class 1259 OID 19027)
-- Name: universities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.universities (
    id integer NOT NULL,
    name text NOT NULL,
    short_name text,
    fee text,
    image text,
    highlights jsonb NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.universities OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 19036)
-- Name: universities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.universities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.universities_id_seq OWNER TO postgres;

--
-- TOC entry 4936 (class 0 OID 0)
-- Dependencies: 224
-- Name: universities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.universities_id_seq OWNED BY public.universities.id;


--
-- TOC entry 4778 (class 2604 OID 19039)
-- Name: universities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.universities ALTER COLUMN id SET DEFAULT nextval('public.universities_id_seq'::regclass);


--
-- TOC entry 4929 (class 0 OID 19027)
-- Dependencies: 223
-- Data for Name: universities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.universities (id, name, short_name, fee, image, highlights, created_at) FROM stdin;
1	Can Tho University	CTUMP	4 lakhs	https://www.ctu.edu.vn/images/2022/08/12/hitech-2.jpg	[{"icon": "🎓", "text": "43-Year-Old University"}, {"icon": "✅", "text": "NMC-Recognised for Indian Students"}, {"icon": "📘", "text": "Indian Curriculum"}, {"icon": "🩺", "text": "Early Clinical Exposure from 1st Year"}, {"icon": "🏨", "text": "Luxurious Hostel with Indian Food"}]	2026-04-09 13:35:08.576612
2	Dai Nam University	DNU	3.5 lakhs	https://atm273446-s3user.vcos.cloudstorage.com.vn/dhdainam/asset/images/news/497529472_1116084437213279_3837768097926410454_n_1.jpg	[{"icon": "📜", "text": "NMC-compliant English-medium MBBS Program"}, {"icon": "🏥", "text": "Affiliated with 16+ Hospitals for Clinical Training"}, {"icon": "🧠", "text": "NEXT-Focused Curriculum & Indian Faculty Support"}, {"icon": "🍛", "text": "Hostel with Indian Food & Comfortable Living"}, {"icon": "✈️", "text": "Close to India — ~4-Hour Flight"}]	2026-04-09 13:35:08.576612
3	Buon Ma Thuot Medical University	BMU	3.8 lakhs	https://atlasmentor.com/wp-content/uploads/2024/07/Buon-Ma-Thuot-Medical-University-Vietnam.jpg	[{"icon": "🏥", "text": "500+ bed multi-specialty teaching hospital on campus"}, {"icon": "👩‍⚕️", "text": "Affiliated with 12+ hospitals"}, {"icon": "📘", "text": "English-medium MBBS aligned with NMC"}, {"icon": "✈️", "text": "Around 5 hrs flight from India"}, {"icon": "🍛", "text": "Separate hostels with Indian food"}]	2026-04-09 13:35:08.576612
4	Phan Chau Trinh University	PCTU	7.2 lakhs	https://medilearn.spatialdecisions.com/wp-content/uploads/2025/07/dai-hoc-phan-chau-trinh.jpg	[{"icon": "🏥", "text": "Multi-specialty hospitals with 1500+ beds"}, {"icon": "👩‍⚕️", "text": "Training in 9 hospitals + internships"}, {"icon": "📘", "text": "100% English medium MBBS"}, {"icon": "✈️", "text": "Around 4.5 hrs flight from India"}, {"icon": "🍛", "text": "Hostels with Indian food"}]	2026-04-09 13:35:08.576612
11	Nam can tho university	NCTU	3.9 lakhs	https://tse2.mm.bing.net/th/id/OIP.w0nb7xayJadgGORvYN7B-wHaEq?rs=1&pid=ImgDetMain&o=7&rm=3	[{"icon": "📘", "text": "Wide range of courses"}, {"icon": "🏥", "text": "Strong focus on medical & health sciences"}, {"icon": "👩‍⚕️", "text": "Practical & industry-based learning"}, {"icon": "✈️", "text": "International & modern learning environment"}, {"icon": "🎓", "text": "Scholarship & financial support"}]	2026-04-10 18:12:46.986917
15	Can Tho University of Health & Sciences	CTUHS	5.5L	https://tuyensinh.ctump.edu.vn/wp-content/uploads/2022/10/z3811887100300_bef3c95c3fb8bb0ee5c7d2d6c45d1fa4.jpg	[{"icon": "✅", "text": "NMC Approved University"}, {"icon": "🇬🇧", "text": "English Medium Program"}, {"icon": "🏥", "text": "Modern Hospital Training"}, {"icon": "💰", "text": "Affordable Fee Structure"}, {"icon": "🍛", "text": "Indian Food Available"}, {"icon": "🏫", "text": "Safe & Student-Friendly Campus"}]	2026-05-05 03:57:23.966465
\.


--
-- TOC entry 4937 (class 0 OID 0)
-- Dependencies: 224
-- Name: universities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.universities_id_seq', 15, true);


--
-- TOC entry 4781 (class 2606 OID 19047)
-- Name: universities universities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.universities
    ADD CONSTRAINT universities_pkey PRIMARY KEY (id);


-- Completed on 2026-05-24 10:50:37

--
-- PostgreSQL database dump complete
--

\unrestrict si5b6rYSBO3ZkDqukQLK5sgMcUWPGXUEUaqIlwL5kyqVt8SzMxppVAveVoENhyK

