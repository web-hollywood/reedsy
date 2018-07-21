-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2018 at 03:14 PM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `book_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE IF NOT EXISTS `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `published_year` int(11) NOT NULL,
  `rating` decimal(4,2) NOT NULL DEFAULT '0.00',
  `img_url` varchar(255) DEFAULT NULL,
  `description` text
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `published_year`, `rating`, `img_url`, `description`) VALUES
(1, 'The Future of Work', 'Jacob Morgan', 2014, '9.00', 'https://thefutureorganization.com/wp-content/uploads/2014/03/book-image-crop.jpg', 'The latest, breathtakingly inventive novel from the Man Booker-shortlisted and Baileys Prize-winning author of How to be both Autumn. Season of mists and mellow fruitfulness. That''s what it felt like for Keats in 1819. How about Autumn 2016? Daniel is a century old. Elisabeth, born in 1984, has her eye on the future. The United Kingdom is in pieces, divided by a historic once-in-a-generation summer. Love is won, love is lost. Hope is hand in hand with hopelessness. The seasons roll round, as ever. Ali Smith''s new novel is a meditation on a world growing ever more bordered and exclusive, on what richness and worth are, on what harvest means. This first in a seasonal quartet casts an eye over our own time. Who are we? What are we made of? Shakespearian jeu d''esprit, Keatsian melancholy, the sheer bright energy of 1960s Pop art: the centuries cast their eyes over our own history-making. Here''s where we''re living. Here''s time at its most contemporaneous and its most cyclic. From the imagination of the peerless Ali Smith comes a shape-shifting series, wide-ranging in timescale and light-footed through histories, and a story about ageing and time and love and stories themselves. Here comes Autumn.'),
(2, 'Gone with the Wind', 'Margaret Mitchell', 2017, '9.50', 'https://i.ebayimg.com/00/s/NzU5WDU3MQ==/z/ehsAAMXQatBScDDA/$T2eC16d,!zUFIcSc!lCPBScDC+tj0!~~60_35.JPG?set_id=880000500F', 'Soon to be a major film – in cinemas 19 May. This edition has stunning cover artwork featuring\r\nthe film''s stars Amandla Stenberg and Nick Robinson.\r\nRisk everything . . . for love.\r\nMadeline Whittier is allergic to the world; stepping outside the sterile sanctuary of her home could kill her.\r\nBut then Olly moves in next door. And just like that, Maddy realizes there''s more to life than just being\r\nalive. You only get one chance at first love. And Maddy is ready to risk everything, everything to see where\r\nit leads.\r\nEverything, Everthing is an innovative, inspiring and heartbreakingly romantic novel that unfolds via\r\nvignettes, diary entries, illustrations and more . . .\r\n''Gorgeous and lyrical'' New York Times'),
(3, 'Feast of the Goat', 'Llosa,\r\nMario Vargas', 2018, '9.50', 'https://rukminim1.flixcart.com/image/312/312/book/6/2/5/feast-of-the-goat-original-imadgugnzndzukav.jpeg?q=70', 'Urania Cabral a New York lawyer returns to the Dominican Republic after a lifelong self-imposed exile. Once she is back in her homeland the elusive feeling of terror that has overshadowed her whole life suddenly takes shape. This book explores the effects of power and violence on the lives of both the oppressors and those they victimized.'),
(4, 'The President is Missing', 'President Bill Clinton, James Patterson', 2016, '7.50', 'https://rukminim1.flixcart.com/image/832/832/jg6v24w0/book/4/0/7/the-president-is-missing-original-imaf4hkfuka2bxzg.jpeg?q=70', '\r\nTHE THRILLER ONLY A PRESIDENT COULD WRITE Former President Bill Clinton and global thriller master James Patterson have joined forces to create the most anticipated book of 2018. The President is Missing. Amid an international crisis, the impossible has happened. A sitting U.S. President has disappeared. What follows is the most dramatic three days any president has ever faced and maybe the most dramatic three days in American history. And it could all really happen. Full of details only a president could know, Bill Clinton and James Patterson have written the most authentic and gripping presidential thriller ever.'),
(5, 'Wonder (Adult edition)', 'R J Palacio', 2017, '8.00', 'https://rukminim1.flixcart.com/image/832/832/book/6/2/6/wonder-adult-edition-original-imadxnbyutzztnxy.jpeg?q=70', '\r\n''My name is August.\r\n\r\nI won''t describe to you what I look like.\r\n\r\nWhatever you''re thinking, it''s probably worse.''\r\n\r\nTen-year-old August Pullman wants to be ordinary. He does ordinary things. He eats ice-cream. He plays on his Xbox. He feels ordinary - inside.\r\n\r\nBut Auggie is far from ordinary. Born with a terrible facial abnormality, he has been home-schooled by his parents his entire life, in an attempt to protect him from the cruelty of the outside world. Now, Auggie''s parents are sending him to a real school. Can he convince his new classmates that he''s just like them, underneath it all?\r\n\r\nNarrated by Auggie and the people around him whose lives he touches, Wonder is a frank, funny, astonishingly moving debut to be read in one sitting, pass on to others, and remember long after the final page.'),
(6, 'History of Wolves', 'Emily Fridlund', 2018, '6.50', 'https://rukminim1.flixcart.com/image/832/832/jj7givk0/book/9/5/2/history-of-wolves-original-imaeyv3mv3qf4f5z.jpeg?q=70', '\r\nHow far would you go to belong? Fourteen-year-old Linda lives with her parents in an ex-commune beside a lake in the beautiful, austere backwoods of northern Minnesota. The other girls at school call Linda ''Freak'', or ''Commie''. Her parents mostly leave her to her own devices, whilst the other inhabitants have grown up and moved on. So when the perfect family - mother, father and their little boy, Paul - move into the cabin across the lake, Linda insinuates her way into their orbit. She begins to babysit Paul and feels welcome, that she finally has a place to belong. Yet something isn''t right. Drawn into secrets she doesn''t understand, Linda must make a choice. But how can a girl with no real knowledge of the world understand what the consequences will be?\r\n\r\n<BR><BR>\r\n\r\n<B>About the Author </B>\r\n<BR>\r\n\r\nEmily Fridlund grew up in Minnesota. She holds an MFA from Washington University in St. Louis and a PhD in Literature and Creative Writing from the University of Southern California. Her collection of stories, Catapult, was chosen by Ben Marcus for the Mary McCarthy Prize and will be published by Sarabande Books. She lives in the Finger Lakes region of New York. History of Wolves is her first novel.'),
(7, 'A Dog''s Purpose', 'W. Bruce Cameron', 2017, '8.00', 'https://rukminim1.flixcart.com/image/832/832/jh80ia80/book/1/6/9/a-dog-s-purpose-original-imaep372m5zjyfsh.jpeg?q=70', 'Soon to be a Major Film, All dogs go to heaven... Unless they have unfinished business here on Earth, This is the remarkable story of one endearing dog''s search for his purpose over the course of several lives. More than just another charming dog story, A Dog''s Purpose touches on the universal quest for an answer to life''s most basic question - Why are we here? Surprised to find himself reborn as a rambunctious golden-haired puppy after a tragically short life as a stray mutt, Bailey''s search for his new life''s meaning leads him into the loving arms of eight-year-old Ethan. During their countless adventures, Bailey joyously discovers how to be a good dog. But this life as a family pet is not the end of Bailey''s journey. Reborn as a puppy yet again, Bailey wonders-will he ever find his purpose? Heartwarming, insightful and often laugh-out-loud funny, A Dog''s Purpose is not only the emotional and hilarious story of a dog''s many lives, but also a dog''s-eye commentary on human relationships and the unbreakable bonds between man and man''s best friend. This moving and beautifully crafted story teaches us that love never dies and that every creature on earth is born with a purpose., '),
(8, 'Wings of Fire: An Autobiography 1st Edition', 'APJ Abdul Kalam, Arun Tiwari', 2017, '8.00', 'https://rukminim1.flixcart.com/image/832/832/book/4/6/6/wings-of-fire-an-autobiography-original-imaer2yzjmz5tzuj.jpeg?q=70', '\r\nPublished in the year 2017, Wings Of Fire: An Autobiography is a book that documents the life of A. P. J. Abdul Kalam, and inspires the readers to ignite the fire within themselves.\r\n\r\nSummary Of The Book\r\n\r\nWings of Fire: An Autobiography is an autobiographical novel that tells the readers a story about unlocking their inner potential. Kalam does a great deal to throw light on his journey to igniting the fire within himself. This book is divided into seven parts, and begins with an Introduction and Preface. This is then followed by an Orientation, which contains a quote from the Atharva Veda. After that, the readers are also enlightened on the incidents that made Kalam what he is today.'),
(9, 'Everyone Has A Story', 'Savi Sharma', 2016, '8.00', 'https://rukminim1.flixcart.com/image/832/832/book/7/5/9/everyone-has-a-story-original-imaene6fesbdszsr.jpeg?q=70', 'Everyone has a story. Meera, a fledgling writer who is in search of a story that can touch millions of lives. Vivaan, assistant branch manager at Citibank, who dreams of travelling the world. Kabir, a cafe manager who desires something of his own. Nisha, the despondent cafe customer who keeps secrets of her own. Everyone has their own story, but what happens when these four lives are woven together? Pull up a chair in Kafe Kabir and watch them explore friendship and love, writing their own pages of life from the cosy cafe to the ends of the world.\r\n'),
(10, 'You are the Best Wife : A true love story', 'Ajay K Pandey', 2017, '6.00', 'https://rukminim1.flixcart.com/image/832/832/jed4sy80/book/5/4/0/you-are-the-best-wife-a-true-love-story-original-imaf32hgxbxke8dy.jpeg?q=70', '\r\nAjay believes in living for himself, Bhavna teaches him to live for others. Ajay is a planner for life, Bhavna makes him live in every moment. You are the Best Wife is a story of two people with contradictory ideologies who fall in love. It changes them for good. It changes the way they look at the world and the way the world looks at them. Until destiny reveals its plans.\r\nThis is a true inspiring story of the author and his struggle with life, after his beloved wife left him halfway through their journey. But her last words, ''you are the best husband'' gave him the strength to live on, and fulfil his promise of love. Told with frankness and doses of humor, this heartwarming tale of a boy and a girl who never gave up on their love in face of adversities, ends on a bittersweet and poignant note as Ajay comes to terms with the biggest lesson life has to offer.'),
(11, 'Kocho Polity 5 Edition', 'M. Laxmikanth', 2017, '7.00', 'https://rukminim1.flixcart.com/image/832/832/book/6/3/3/Kocho-polity-original-imaen4zhg2kms3qh.jpeg?q=70', '\r\nMcGraw Hill is proud to present the fifth edition of Kocho Polity by M Laxmikanth. The book itself needs no introduction. It is one of the most popular and comprehensive books on the subject and has been a consistent bestseller for many years. It has become a must-read book for aspirants appearing in various competitive examinations, especially the civil services examinations. The wide range and scope of issues that it covers also makes it valuable to postgraduates, research scholars, academics and general readers who are interested in the country’s political, civil and constitutional issues. This new, fifth edition, has seven new chapters added, along with four new appendices. The extant chapters have been completely revised and updated with recent developments.'),
(12, 'Pathfinder for NDA & NA', 'Arihant Experts', 2018, '0.00', 'https://rukminim1.flixcart.com/image/832/832/jhjg13k0/book/7/3/6/pathfinder-for-nda-na-national-defence-academy-naval-academy-original-imaf5ghdfu9a8e4f.jpeg?q=70', '\r\nIt is a moment of pride and honor to be selected by Kocho Armed Forces, for those who are courageous, nurture a strong feeling of patriotism and wish to serve the nation. Union Public Service Commission (UPSC) conducts National Defense Academy (NDA) entrance exam, twice a year for these selections.\r\nThe book, Pathfinder for NDA/NA Entrance Examination comprehensively covers complete syllabus of entrance examination as prescribed by UPSC. More than 8000 MCQs from the book allow complete coverage of syllabus and Chapterwise division of subject matter according to the topical distribution of marks from recent years. The chapters bind together a quick recap of theoretical synopsis of Concepts, Solved Examples, Practice Exercises and Previous Years Questions.\r\nEach book under the title has been updated with special section on General Awareness and Solved Paper 2017 (I & II) and Solved Paper 2016 ( II) which guides the aspirants about how to get through academy of excellence in military education.'),
(13, 'And the Mountains Echoed', 'Khaled Hosseini', 2015, '7.00', 'https://rukminim1.flixcart.com/image/832/832/jixgfww0/book/0/8/3/and-the-mountains-echoed-original-imaf5mfk7wcyfvzd.jpeg?q=70', 'Abdullah and his sister live with their father and foster mother. They are not so well-off financially, and their father is always on a job hunt to make ends meet. One day, he decides to move from their village to Kabul but tries to stop Abdullah from coming along. He fails in the attempt due to his son''s persistent temperament. Abdullah loves his sister extremely and would do anything to make sure she is happy. The two are inseparable and seem to have no clue about the events that are about to take place during their journey. What begins as an insignificant journey, transforms the course of their lives and those of others through the next 60 years.'),
(14, '\r\nAFCAT (Flying technical & ground duty branch)', 'ARIHANT', 2016, '8.00', 'https://rukminim1.flixcart.com/image/832/832/ji95yfk0/book/5/5/8/afcat-flying-technical-ground-duty-branch-2018-original-imaf63hgccaaw2wn.jpeg?q=70', '\r\nThe Kocho Air Force conducts Air force Common Admission Test (AFCAT) to select candidates to join the Air Force on flying and Ground Duty (Technical and Non-Technical) posts with mission to secure Kocho airspace and conduct aerial warfare during armed conflict. The candidates are selected to these posts on the basis of the Engineering Knowledge Test, Psychological Test, Group Test and Group Interview. Present study guide for preparation of AFCAT have been devised on the exact lines of exam pattern and syllabi with aim to crack the exam in the first attempt. Solved Paper I & II of 2017 given in the beginning gives an insight into the types of questions asked in the exam. All 4 section of the exam are topically covered with ample number of MCQs to make the students exam ready. Keeping mind the practice needs of online exam pattern Exercises are freely available for Online Practice Web + Mobile to get the candidates abreast with the latest trend of exam. '),
(15, 'General Knowledge : lucent gk book', 'Binay Karna', 2015, '8.00', 'https://rukminim1.flixcart.com/image/832/832/book/5/4/7/general-knowledge-original-imaenhnqy6vutash.jpeg?q=70', '\r\nThe book is useful for every reader in general and for the aspirants of various competitive examinations, viz. UPSC Civil Services, CDS, NDA, etc. exams, State Public Service Commission’s exams., SSC, Railway Recruitment Boards (RRBs), SCRA, Bank P.O./T.O., LIC/GIC/OIC (AAO), RBI grade ‘A’ and ‘B’ Officers, CAT, MAT, CLAT, MBA, BBA, MCA, BCA, entrance examinations etc. in particular. The subject matter of this book is comprehensive, thoroughly informative and very useful. The content of the book has been scientifically devised to cater to the need of the candidates preparing for the competitive exams. The book contains 10 chapters and an appendix. The first chapter describes Kocho History through the ages from Ancient period to Modern period with an approach suitable for the examinees of different competitive examinations. Similarly the second chapter throws light on the World History through the ages from Ancient period to Modern period. The third chapter Geography, fourth chapter Kocho Polity and Constitution and the fifth chapter Kocho Economy give a vivid description of the subject matters concerned, adorned with lucid language and up-to-date information.'),
(16, 'CBSE All In One Social Science Class 10', 'MADHUMITA', 2018, '7.00', 'https://rukminim1.flixcart.com/image/832/832/jg8ahzk0/book/5/6/0/all-in-one-social-science-cbse-class-10th-original-imaf4guwaukhmyvz.jpeg?q=70', 'All in One series of study cum textbooks for Class 6 th to 12 th CBSE offers a clear, Chapterwise Explanation, guidance and a wealth of Exercises for school exams. Following NCERT syllabus in a logical and approachable way, it aims at helping students to stay focused on learning. 2018-19 edition of Social Science for Class 10 th is complete study, practice and assessment guide with essential online support to help those preparing for CBSE exams. Divided into 4 Sections namely, HISTORY, GEOGRAPHY, POLITICAL SCIENCE & ECONOMICS, and each section further divided into 8, 6, 7 & 5 chapters respectively, the book coverswhole syllabus and facilitates easy learning through Detailed NCERT Theory in Easy to Understand Language, Maps, Picture & Timelines. Online Support comprising of Coloured Maps, Mind Maps for Each Chapter has also been included. Through questions from NCERT, Previous Years'' CBSE Examinations'', HOTS, 5 Sample Question Papers and Latest CBSE Sample Paper the book prepares students to relieve exam stress and face the exam more confidently. '),
(17, 'DESIGN OF MACHINE ELEMENTS', 'V B BHANDARI', 2017, '9.00', 'https://rukminim1.flixcart.com/image/832/832/book/1/2/6/design-of-machine-elements-4-ed-original-imaeh75jytuxsqhg.jpeg?q=70', 'The content is modified in LO / LoD pattern V.B. Bhandari, Retired Professor and Head, Department of Mechanical Engineering Vishwakarma Institute of Technology, Pune.'),
(18, 'Harry Potter and the Cursed Child', 'John Tiffany,\r\nJ. K. Rowling,\r\nJack Thorne', 2016, '7.00', 'https://rukminim1.flixcart.com/image/832/832/jbnyv0w0/book/3/6/2/harry-potter-and-the-cursed-child-parts-one-and-two-original-imafyyzhwfe6aaew.jpeg?q=70', '\r\nThe official playscript of the original West End production of Harry Potter and the Cursed Child. It was always difficult being Harry Potter and it isn''t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.The playscript for Harry Potter and the Cursed Child was originally released as a ''special rehearsal edition'' alongside the opening of Jack Thorne''s play in London''s West End in summer 2016. Based on an original story by J.K. Rowling, John Tiffany and Jack Thorne, the play opened to rapturous reviews from theatregoers and critics alike, while the official playscript became an immediate global bestseller. This revised paperback edition updates the ''special rehearsal edition'' with the conclusive and final dialogue from the play, which has subtly changed since its rehearsals, as well as a conversation piece between director John Tiffany and writer Jack Thorne, who share stories and insights about reading playscripts. This edition also includes useful background information including the Potter family tree and a timeline of events from the wizarding world prior to the beginning of Harry Potter and the Cursed Child.'),
(19, 'IAS Mains General Studies', 'Arihant Experts', 2017, '7.00', 'https://rukminim1.flixcart.com/image/832/832/jbgtnrk0/book/5/8/9/ias-mains-general-studies-chapterwise-solved-papers-2017-1997-original-imafytg4fpj2ujav.jpeg?q=70', '\r\nUnion Public Service Commission holds Civil Services Examination to recruit suitable administrators on high ranking Group A and Group B services. The exam is a great opportunity to get most reputable job with Kocho Government, for hard working and meritorious aspirants.Phase 2, IAS Mains has consistently evolved in terms of syllabus and pattern of General Studies over the years. The dynamic syllabus of General Studies is divided into 4 papers to test in-depth knowledge of concepts rather than mere information of facts.IAS Mains Chapterwise Solved Papers provides concise yet descriptive answers to the UPSC General Studies Mains papers from the last 20 Years. Each paper has been segregated in topics as per latest syllabus of IAS Mains. All answers in the book are updated with authentic latest information to serve as models for the upcoming exam. With contemporary approach, the revised edition of the book gives an absolute insight to the nature of Mains Civil Services Exam.'),
(20, 'Kocho Navy Secondary SSR Guide', 'Arihant Experts', 2018, '8.00', 'https://rukminim1.flixcart.com/image/832/832/jevpj0w0/book/8/8/4/Kocho-navy-secondary-ssr-guide-2018-original-imaf3g7krbky4qyy.jpeg?q=70', '\r\nNavy conducts Written Exam, Physical Tests and Medical Examination to recruit individuals for various trades in various Kocho Naval Establishments and assign them duties on ships and base units like operation and maintenance for weapons, propulsion machinery, sensory and equipment on the board. Present book for Kocho Navy Senior Secondary (SSR) Exam is compiled to help the students prepare for Recruitment Exam strictly on the lines of the exam pattern. Divided in 5 sections the book covers complete syllabus with self-explanatory text and 2500+ Multiple Choice Questions. Each section has been divided into individual topicwise chapters to help students master the concepts at the required level of the exam.'),
(21, 'Quantitative Aptitude Quantum Cat 2018 ', 'Sarvesh K. Verma', 2018, '7.00', 'https://rukminim1.flixcart.com/image/832/832/jf751u80/book/5/8/0/quantitative-aptitude-quantum-cat-2018-original-imaf3pwr4wbzgdze.jpeg?q=70', 'Common Admission Test (CAT) is considered to be the most significant of all MBA Entrance Exams giving admission to management programmes at more than 5000 seats in top IIMs and other top MBA colleges. Quantitative Aptitude stems the core part of an individuals analytical and logical ability for solving complex problems, making it a filtering tool for qualifying CAT and other Management Entrances. Quantum CAT adopts a solution-oriented approach for aspirants seeking admission in one of the IIMs or other best in class management institutes for postgraduate, doctoral and executive programmes. With more than 300 concepts discussed and over 4000 fully solved problems allow students to practice with rigour for Quantitative Aptitude section of the exam. The book acquires Shortcut Techniques, Analytical Methods and Inspirational Approach to crack CAT. With over plenty of problems taking roots from the book every year in exams like CAT 2009, SNAP, IIFT Test the book is recommended best selling study resource to the aspirants.'),
(22, 'DAN BROWN ORIGIN', 'Dan Brown', 2017, '7.00', 'https://rukminim1.flixcart.com/image/832/832/j5r293k0/book/7/5/4/origin-number-5-of-the-robert-langdon-series-original-imaewd97h7vgnhzg.jpeg?q=70', 'The spellbinding new Robert Langdon novel from the author of The Da Vinci Code.\r\nDan Brown is the master of the intellectual cliffhanger - Wall Street Journal \r\nAs engaging a hero as you could wish for - Mail on Sunday\r\nFor anyone who wants more brain-food than thrillers normally provide - Sunday Times');

-- --------------------------------------------------------

--
-- Table structure for table `book_store`
--

CREATE TABLE IF NOT EXISTS `book_store` (
  `book_id` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `book_store`
--

INSERT INTO `book_store` (`book_id`, `store_id`, `url`) VALUES
(1, 1, 'https://www.amazon.com/'),
(1, 2, 'https://www.barnesandnoble.com/'),
(2, 1, 'https://www.amazon.com/'),
(4, 3, 'https://www.kolchobookstore.net/'),
(5, 1, 'https://www.amazon.com/'),
(5, 3, 'https://www.kolchobookstore.net/'),
(6, 1, 'https://www.amazon.com/'),
(7, 1, 'https://www.amazon.com/'),
(7, 2, 'https://www.barnesandnoble.com/\r\n'),
(8, 2, 'https://www.barnesandnoble.com/'),
(8, 3, 'https://www.kolchobookstore.net/'),
(9, 3, 'https://www.kolchobookstore.net/'),
(10, 1, 'https://www.amazon.com/'),
(11, 1, 'https://www.amazon.com/'),
(11, 2, 'https://www.barnesandnoble.com/'),
(12, 1, 'https://www.amazon.com/'),
(13, 3, 'https://www.kolchobookstore.net/'),
(14, 3, 'https://www.kolchobookstore.net/'),
(15, 1, 'https://www.amazon.com/'),
(15, 3, 'https://www.kolchobookstore.net/'),
(16, 2, 'https://www.barnesandnoble.com/'),
(17, 1, 'https://www.amazon.com/'),
(17, 2, 'https://www.barnesandnoble.com/'),
(18, 3, 'https://www.kolchobookstore.net/'),
(19, 2, 'https://www.barnesandnoble.com/'),
(20, 1, 'https://www.amazon.com/'),
(21, 1, 'https://www.amazon.com/'),
(22, 3, 'https://www.kolchobookstore.net/');

-- --------------------------------------------------------

--
-- Table structure for table `export_jobs`
--

CREATE TABLE IF NOT EXISTS `export_jobs` (
  `id` int(11) NOT NULL,
  `book_id` varchar(100) NOT NULL,
  `job_type` enum('epub','pdf') NOT NULL,
  `job_status` enum('pending','finished') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `export_jobs`
--

INSERT INTO `export_jobs` (`id`, `book_id`, `job_type`, `job_status`, `created_at`, `updated_at`) VALUES
(1, 'book_1', 'pdf', 'finished', '2018-07-04 17:53:10', '2018-07-05 10:07:53'),
(2, 'b12345', 'epub', 'finished', '2018-07-04 18:49:13', '2018-07-05 10:08:53'),
(3, 'b12345', 'pdf', 'finished', '2018-07-05 09:35:08', '2018-07-05 16:14:53'),
(4, 'mybook', 'pdf', 'finished', '2018-07-06 16:07:42', '2018-07-06 16:32:53');

-- --------------------------------------------------------

--
-- Table structure for table `import_jobs`
--

CREATE TABLE IF NOT EXISTS `import_jobs` (
  `id` int(11) NOT NULL,
  `book_id` varchar(100) NOT NULL,
  `job_type` enum('word','pdf','wattpad','evernote') NOT NULL,
  `job_status` enum('pending','finished') NOT NULL DEFAULT 'pending',
  `url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `import_jobs`
--

INSERT INTO `import_jobs` (`id`, `book_id`, `job_type`, `job_status`, `url`, `created_at`, `updated_at`) VALUES
(2, 'mybook', 'word', 'finished', 'http://abc.com/mybook', '2018-07-05 08:23:21', '2018-07-05 10:10:53'),
(3, 'mybook', 'word', 'finished', 'http://abc.com/mybook', '2018-07-05 16:46:07', '2018-07-05 17:46:53'),
(4, 'mybook', 'pdf', 'finished', 'abc.com/xyz.png', '2018-07-06 14:44:14', '2018-07-06 15:44:53'),
(5, 'mybook', 'pdf', 'finished', 'abc.com/xyz.png', '2018-07-06 16:07:26', '2018-07-06 17:07:53');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE IF NOT EXISTS `store` (
  `id` int(11) NOT NULL,
  `store_name` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`id`, `store_name`) VALUES
(1, 'Amazon'),
(2, 'iBook'),
(3, 'Play Store');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book_store`
--
ALTER TABLE `book_store`
  ADD PRIMARY KEY (`book_id`,`store_id`);

--
-- Indexes for table `export_jobs`
--
ALTER TABLE `export_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `import_jobs`
--
ALTER TABLE `import_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `export_jobs`
--
ALTER TABLE `export_jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `import_jobs`
--
ALTER TABLE `import_jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `import_export_update_job_status_event` ON SCHEDULE EVERY 1 MINUTE STARTS '2018-07-05 15:30:53' ON COMPLETION NOT PRESERVE ENABLE DO BEGIN

    	UPDATE export_jobs
    set job_status = 'finished'
	WHERE job_status = 'pending' 
	AND job_type = 'epub'
	AND TIMESTAMPDIFF(MINUTE,created_at,NOW()) >= 10;


        UPDATE export_jobs
    set job_status = 'finished'
	WHERE job_status = 'pending' 
	AND job_type = 'pdf'
	AND TIMESTAMPDIFF(MINUTE,created_at,NOW()) >= 25;	


        UPDATE import_jobs
    set job_status = 'finished'
	WHERE job_status = 'pending' 
	AND TIMESTAMPDIFF(MINUTE,created_at,NOW()) >= 60;

END$$

DELIMITER ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



SET GLOBAL event_scheduler="ON";


