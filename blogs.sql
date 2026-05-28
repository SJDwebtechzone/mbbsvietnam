--
-- PostgreSQL database dump
--

\restrict MHVh8YXnPfYKBv0GOvNtmzkcrQzt0hGS9dTFXi1zibnDDeHDR1yNeCU3NQklf5S

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-05-24 10:48:31

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
-- TOC entry 221 (class 1259 OID 19018)
-- Name: blogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blogs (
    id integer NOT NULL,
    title text NOT NULL,
    slug text NOT NULL,
    author text,
    date text,
    image text
);


ALTER TABLE public.blogs OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 19026)
-- Name: blogs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.blogs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.blogs_id_seq OWNER TO postgres;

--
-- TOC entry 4937 (class 0 OID 0)
-- Dependencies: 222
-- Name: blogs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.blogs_id_seq OWNED BY public.blogs.id;


--
-- TOC entry 4778 (class 2604 OID 19038)
-- Name: blogs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs ALTER COLUMN id SET DEFAULT nextval('public.blogs_id_seq'::regclass);


--
-- TOC entry 4930 (class 0 OID 19018)
-- Dependencies: 221
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.blogs (id, title, slug, author, date, image) FROM stdin;
1	PCTU's New Tissue Bank: A Revolution for MBBS at Phan Chau Trinh University	pctu-tissue-bank	AIERAA	January 2025	https://pctu.edu.vn/vnt_upload/admissions/04_2024/z6122825220636_14828c21337500c2943c44112c6a0468.jpg
2	Top 4 Medical Universities in Vietnam for Indian Students (2026): Fees, Ranking & Reviews	top-4-medical-universities-vietnam-2026	Barat Vasireddy	January 2026	https://www.aubsp.com/wp-content/uploads/2024/03/study-in-vietnam.jpg
3	MBBS in Vietnam vs Russia, Uzbekistan & Georgia: Comparison 2026	mbbs-vietnam-vs-russia-uzbekistan-georgia-2026	Bharat Vasireddy	January 2026	https://ichef.bbci.co.uk/news/1024/branded_news/339A/production/_132701231_ukraine_maps_piece_promo_976x549-2x-nc.png
\.


--
-- TOC entry 4938 (class 0 OID 0)
-- Dependencies: 222
-- Name: blogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.blogs_id_seq', 7, true);


--
-- TOC entry 4780 (class 2606 OID 19043)
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);


--
-- TOC entry 4782 (class 2606 OID 19045)
-- Name: blogs blogs_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_slug_key UNIQUE (slug);


-- Completed on 2026-05-24 10:48:32

--
-- PostgreSQL database dump complete
--

\unrestrict MHVh8YXnPfYKBv0GOvNtmzkcrQzt0hGS9dTFXi1zibnDDeHDR1yNeCU3NQklf5S

