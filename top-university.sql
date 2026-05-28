--
-- PostgreSQL database dump
--

\restrict 8dIOsOM0g6YnoQBDp6VoMBCVD1ep1FZld3Bkm59Ufl0xgRHtFQ4p3FAgSRiUCo2

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-05-09 14:25:08

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
-- TOC entry 232 (class 1259 OID 27166)
-- Name: top_university; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.top_university (
    id integer NOT NULL,
    university_id integer,
    rank integer,
    badge character varying(255),
    is_active boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.top_university OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 27165)
-- Name: top_university_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.top_university_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.top_university_id_seq OWNER TO postgres;

--
-- TOC entry 4937 (class 0 OID 0)
-- Dependencies: 231
-- Name: top_university_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.top_university_id_seq OWNED BY public.top_university.id;


--
-- TOC entry 4778 (class 2604 OID 27169)
-- Name: top_university id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.top_university ALTER COLUMN id SET DEFAULT nextval('public.top_university_id_seq'::regclass);


--
-- TOC entry 4931 (class 0 OID 27166)
-- Dependencies: 232
-- Data for Name: top_university; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.top_university (id, university_id, rank, badge, is_active, created_at) FROM stdin;
\.


--
-- TOC entry 4938 (class 0 OID 0)
-- Dependencies: 231
-- Name: top_university_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.top_university_id_seq', 1, false);


--
-- TOC entry 4782 (class 2606 OID 27174)
-- Name: top_university top_university_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.top_university
    ADD CONSTRAINT top_university_pkey PRIMARY KEY (id);


-- Completed on 2026-05-09 14:25:09

--
-- PostgreSQL database dump complete
--

\unrestrict 8dIOsOM0g6YnoQBDp6VoMBCVD1ep1FZld3Bkm59Ufl0xgRHtFQ4p3FAgSRiUCo2

