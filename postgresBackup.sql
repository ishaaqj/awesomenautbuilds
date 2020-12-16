--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Ubuntu 12.5-1.pgdg18.04+1)
-- Dumped by pg_dump version 12.5 (Ubuntu 12.5-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
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
-- Name: charactericons; Type: TABLE; Schema: public; Owner: mo
--

CREATE TABLE public.charactericons (
    id integer NOT NULL,
    characterid integer,
    description text,
    img bytea
);


ALTER TABLE public.charactericons OWNER TO mo;

--
-- Name: characters; Type: TABLE; Schema: public; Owner: mo
--

CREATE TABLE public.characters (
    id integer NOT NULL,
    name character(50),
    health integer,
    althealth integer,
    movement numeric,
    attacktype character(50),
    role character(50),
    abilities character varying(50)[],
    unlockedlevel integer,
    bio text
);


ALTER TABLE public.characters OWNER TO mo;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: mo
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    watchcount integer,
    upvote integer,
    cost integer,
    username text,
    buildname text,
    date date,
    instructions text,
    title text
);


ALTER TABLE public.posts OWNER TO mo;

--
-- Name: userpictures; Type: TABLE; Schema: public; Owner: mo
--

CREATE TABLE public.userpictures (
    id text NOT NULL,
    picture bytea
);


ALTER TABLE public.userpictures OWNER TO mo;

--
-- Name: users; Type: TABLE; Schema: public; Owner: mo
--

CREATE TABLE public.users (
    username text NOT NULL,
    password text,
    totalrating integer
);


ALTER TABLE public.users OWNER TO mo;

--
-- Data for Name: charactericons; Type: TABLE DATA; Schema: public; Owner: mo
--

COPY public.charactericons (id, characterid, description, img) FROM stdin;
\.


--
-- Data for Name: characters; Type: TABLE DATA; Schema: public; Owner: mo
--

COPY public.characters (id, name, health, althealth, movement, attacktype, role, abilities, unlockedlevel, bio) FROM stdin;
0	Admiral Swiggins                                  	1500	1950	7.2	Melee                                             	Initiator                                         	{stun,Blind,Shield,"Damage Over Time","Area of Effect"}	0	lorem ipsum lol
1	Ayla                                              	1300	1690	7.6	Melee                                             	Brawler                                           	{"Area of Effect","Damage Over Time",Fly,Lifesteal,Shield,Slow}	18	lorem ipsum lol
2	Clunk                                             	1900	2470	7.6	Medium                                            	Tank                                              	{Lifesteal,"Area of effect",Ensnare,Slow,"Launch String"}	3	lorem ipsum lol
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: mo
--

COPY public.posts (id, watchcount, upvote, cost, username, buildname, date, instructions, title) FROM stdin;
0	10	10	2000	asd	SomeAwesomenauts Character	2020-12-14	throwsomething and then another	Some TitleName Guide
\.


--
-- Data for Name: userpictures; Type: TABLE DATA; Schema: public; Owner: mo
--

COPY public.userpictures (id, picture) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: mo
--

COPY public.users (username, password, totalrating) FROM stdin;
awesomenautUser	abc	0
asd	asd	1
\.


--
-- Name: charactericons charactericons_pkey; Type: CONSTRAINT; Schema: public; Owner: mo
--

ALTER TABLE ONLY public.charactericons
    ADD CONSTRAINT charactericons_pkey PRIMARY KEY (id);


--
-- Name: characters characters_pkey; Type: CONSTRAINT; Schema: public; Owner: mo
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: mo
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: userpictures userpictures_pkey; Type: CONSTRAINT; Schema: public; Owner: mo
--

ALTER TABLE ONLY public.userpictures
    ADD CONSTRAINT userpictures_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: mo
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);


--
-- Name: charactericons charactericons_characterid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: mo
--

ALTER TABLE ONLY public.charactericons
    ADD CONSTRAINT charactericons_characterid_fkey FOREIGN KEY (characterid) REFERENCES public.characters(id);


--
-- Name: posts posts_username_fkey; Type: FK CONSTRAINT; Schema: public; Owner: mo
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_username_fkey FOREIGN KEY (username) REFERENCES public.users(username);


--
-- Name: userpictures userpictures_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: mo
--

ALTER TABLE ONLY public.userpictures
    ADD CONSTRAINT userpictures_id_fkey FOREIGN KEY (id) REFERENCES public.users(username);


--
-- PostgreSQL database dump complete
--

