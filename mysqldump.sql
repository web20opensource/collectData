-- MySQL dump 10.13  Distrib 5.5.41, for debian-linux-gnu (i686)
--
-- Host: localhost    Database: nodejsDB
-- ------------------------------------------------------
-- Server version	5.5.41-0+wheezy1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `formsni_data`
--

DROP TABLE IF EXISTS `formsni_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `formsni_data` (
  `main` varchar(256) DEFAULT NULL,
  `typeT` varchar(64) DEFAULT NULL,
  `first` varchar(256) DEFAULT NULL,
  `second` varchar(256) DEFAULT NULL,
  `name` varchar(256) DEFAULT NULL,
  `sex` varchar(64) DEFAULT NULL,
  `grade` varchar(256) DEFAULT NULL,
  `disc` varchar(256) DEFAULT NULL,
  `subd` varchar(256) DEFAULT NULL,
  `esp` varchar(256) DEFAULT NULL,
  `sni` varchar(32) DEFAULT NULL,
  `rcea` varchar(32) DEFAULT NULL,
  `cvu` varchar(32) DEFAULT NULL,
  `iAcad` varchar(256) DEFAULT NULL,
  `dep` varchar(256) DEFAULT NULL,
  `dirDep` varchar(256) DEFAULT NULL,
  `ent` varchar(64) DEFAULT NULL,
  `tel` varchar(32) DEFAULT NULL,
  `telExt` varchar(32) DEFAULT NULL,
  `cel` varchar(32) DEFAULT NULL,
  `emailI` varchar(256) DEFAULT NULL,
  `emailP` varchar(256) DEFAULT NULL,
  `RID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`RID`),
  KEY `RID` (`RID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formsni_data`
--

LOCK TABLES `formsni_data` WRITE;
/*!40000 ALTER TABLE `formsni_data` DISABLE KEYS */;
INSERT INTO `formsni_data` VALUES ('group','memeber','lastname','lastname','name ','female','master','advanced','degree','degree 2','-','-','id','institution','institution 2','address','state','tel','ext','tel2','personal email','email 2',1);
/*!40000 ALTER TABLE `formsni_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-05-18 13:15:53
