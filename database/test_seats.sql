-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `seats`
--

DROP TABLE IF EXISTS `seats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seats` (
  `SeatID` int NOT NULL AUTO_INCREMENT,
  `FlightID` int NOT NULL,
  `SeatNumber` varchar(45) DEFAULT NULL,
  `Class` varchar(45) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `seat_price` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`SeatID`),
  KEY `FlightID_idx` (`FlightID`),
  CONSTRAINT `FlightID` FOREIGN KEY (`FlightID`) REFERENCES `flights` (`FlightID`)
) ENGINE=InnoDB AUTO_INCREMENT=337 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seats`
--

LOCK TABLES `seats` WRITE;
/*!40000 ALTER TABLE `seats` DISABLE KEYS */;
INSERT INTO `seats` VALUES (1,1,'1','Economy','Booked','100'),(2,1,'2','Economy','Booked','100'),(3,1,'3','Economy','Booked','100'),(4,1,'4','Economy','Booked','100'),(5,1,'5','Economy','Booked','100'),(6,1,'6','Economy','Booked','100'),(7,1,'7','Economy','Booked','100'),(8,1,'8','Economy','Booked','100'),(9,1,'9','Economy','Booked','100'),(10,1,'10','Economy','Booked','100'),(11,1,'11','Economy','Booked','100'),(12,1,'12','Economy','Booked','100'),(13,1,'13','Premium','Booked','450'),(14,1,'14','Premium','Booked','450'),(15,1,'15','Premium','Booked','450'),(16,1,'16','Premium','Booked','450'),(17,1,'17','Premium','Booked','450'),(18,1,'18','Premium','Booked','450'),(19,1,'19','Premium','Booked','450'),(20,1,'20','Premium','Booked','450'),(21,1,'21','Premium','Booked','450'),(22,1,'22','Premium','Booked','450'),(23,1,'23','Premium','Booked','450'),(24,1,'24','Premium','Booked','450'),(25,2,'1','Economy','Booked','100'),(26,2,'2','Economy','Booked','100'),(27,2,'3','Economy','Available','100'),(28,2,'4','Economy','Booked','100'),(29,2,'5','Economy','Available','100'),(30,2,'6','Economy','Booked','100'),(31,2,'7','Economy','Available','100'),(32,2,'8','Economy','Booked','100'),(33,2,'9','Economy','Available','100'),(34,2,'10','Economy','Booked','100'),(35,2,'11','Economy','Available','100'),(36,2,'12','Economy','Booked','100'),(37,2,'13','Premium','Available','450'),(38,2,'14','Premium','Booked','450'),(39,2,'15','Premium','Available','450'),(40,2,'16','Premium','Booked','450'),(41,2,'17','Premium','Available','450'),(42,2,'18','Premium','Booked','450'),(43,2,'19','Premium','Available','450'),(44,2,'20','Premium','Booked','450'),(45,2,'21','Premium','Available','450'),(46,2,'22','Premium','Booked','450'),(47,2,'23','Premium','Available','450'),(48,2,'24','Premium','Booked','450'),(49,3,'1','Economy','Available','100'),(50,3,'2','Economy','Booked','100'),(51,3,'3','Economy','Available','100'),(52,3,'4','Economy','Booked','100'),(53,3,'5','Economy','Available','100'),(54,3,'6','Economy','Booked','100'),(55,3,'7','Economy','Available','100'),(56,3,'8','Economy','Booked','100'),(57,3,'9','Economy','Available','100'),(58,3,'10','Economy','Booked','100'),(59,3,'11','Economy','Available','100'),(60,3,'12','Economy','Booked','100'),(61,3,'13','Premium','Available','450'),(62,3,'14','Premium','Booked','450'),(63,3,'15','Premium','Available','450'),(64,3,'16','Premium','Booked','450'),(65,3,'17','Premium','Available','450'),(66,3,'18','Premium','Booked','450'),(67,3,'19','Premium','Available','450'),(68,3,'20','Premium','Booked','450'),(69,3,'21','Premium','Available','450'),(70,3,'22','Premium','Booked','450'),(71,3,'23','Premium','Available','450'),(72,3,'24','Premium','Booked','450'),(73,4,'1','Economy','Available','100'),(74,4,'2','Economy','Booked','100'),(75,4,'3','Economy','Available','100'),(76,4,'4','Economy','Booked','100'),(77,4,'5','Economy','Available','100'),(78,4,'6','Economy','Booked','100'),(79,4,'7','Economy','Available','100'),(80,4,'8','Economy','Booked','100'),(81,4,'9','Economy','Available','100'),(82,4,'10','Economy','Booked','100'),(83,4,'11','Economy','Available','100'),(84,4,'12','Economy','Booked','100'),(85,4,'13','Premium','Available','450'),(86,4,'14','Premium','Booked','450'),(87,4,'15','Premium','Available','450'),(88,4,'16','Premium','Booked','450'),(89,4,'17','Premium','Available','450'),(90,4,'18','Premium','Booked','450'),(91,4,'19','Premium','Available','450'),(92,4,'20','Premium','Booked','450'),(93,4,'21','Premium','Available','450'),(94,4,'22','Premium','Booked','450'),(95,4,'23','Premium','Available','450'),(96,4,'24','Premium','Booked','450'),(97,5,'1','Economy','Available','100'),(98,5,'2','Economy','Booked','100'),(99,5,'3','Economy','Available','100'),(100,5,'4','Economy','Booked','100'),(101,5,'5','Economy','Available','100'),(102,5,'6','Economy','Booked','100'),(103,5,'7','Economy','Available','100'),(104,5,'8','Economy','Booked','100'),(105,5,'9','Economy','Available','100'),(106,5,'10','Economy','Booked','100'),(107,5,'11','Economy','Available','100'),(108,5,'12','Economy','Booked','100'),(109,5,'13','Premium','Available','450'),(110,5,'14','Premium','Booked','450'),(111,5,'15','Premium','Available','450'),(112,5,'16','Premium','Booked','450'),(113,5,'17','Premium','Available','450'),(114,5,'18','Premium','Booked','450'),(115,5,'19','Premium','Available','450'),(116,5,'20','Premium','Booked','450'),(117,5,'21','Premium','Available','450'),(118,5,'22','Premium','Booked','450'),(119,5,'23','Premium','Available','450'),(120,5,'24','Premium','Booked','450'),(121,6,'1','Economy','Available','100'),(122,6,'2','Economy','Booked','100'),(123,6,'3','Economy','Available','100'),(124,6,'4','Economy','Booked','100'),(125,6,'5','Economy','Available','100'),(126,6,'6','Economy','Booked','100'),(127,6,'7','Economy','Available','100'),(128,6,'8','Economy','Booked','100'),(129,6,'9','Economy','Available','100'),(130,6,'10','Economy','Booked','100'),(131,6,'11','Economy','Available','100'),(132,6,'12','Economy','Booked','100'),(133,6,'13','Premium','Available','450'),(134,6,'14','Premium','Booked','450'),(135,6,'15','Premium','Available','450'),(136,6,'16','Premium','Booked','450'),(137,6,'17','Premium','Available','450'),(138,6,'18','Premium','Booked','450'),(139,6,'19','Premium','Available','450'),(140,6,'20','Premium','Booked','450'),(141,6,'21','Premium','Available','450'),(142,6,'22','Premium','Booked','450'),(143,6,'23','Premium','Available','450'),(144,6,'24','Premium','Booked','450'),(145,7,'1','Economy','Available','100'),(146,7,'2','Economy','Booked','100'),(147,7,'3','Economy','Available','100'),(148,7,'4','Economy','Booked','100'),(149,7,'5','Economy','Available','100'),(150,7,'6','Economy','Booked','100'),(151,7,'7','Economy','Booked','100'),(152,7,'8','Economy','Booked','100'),(153,7,'9','Economy','Available','100'),(154,7,'10','Economy','Booked','100'),(155,7,'11','Economy','Available','100'),(156,7,'12','Economy','Booked','100'),(157,7,'13','Premium','Available','450'),(158,7,'14','Premium','Booked','450'),(159,7,'15','Premium','Booked','450'),(160,7,'16','Premium','Booked','450'),(161,7,'17','Premium','Available','450'),(162,7,'18','Premium','Booked','450'),(163,7,'19','Premium','Available','450'),(164,7,'20','Premium','Booked','450'),(165,7,'21','Premium','Available','450'),(166,7,'22','Premium','Booked','450'),(167,7,'23','Premium','Available','450'),(168,7,'24','Premium','Booked','450'),(169,8,'1','Economy','Available','100'),(170,8,'2','Economy','Booked','100'),(171,8,'3','Economy','Available','100'),(172,8,'4','Economy','Booked','100'),(173,8,'5','Economy','Available','100'),(174,8,'6','Economy','Booked','100'),(175,8,'7','Economy','Available','100'),(176,8,'8','Economy','Booked','100'),(177,8,'9','Economy','Available','100'),(178,8,'10','Economy','Booked','100'),(179,8,'11','Economy','Available','100'),(180,8,'12','Economy','Booked','100'),(181,8,'13','Premium','Available','450'),(182,8,'14','Premium','Booked','450'),(183,8,'15','Premium','Available','450'),(184,8,'16','Premium','Booked','450'),(185,8,'17','Premium','Available','450'),(186,8,'18','Premium','Booked','450'),(187,8,'19','Premium','Available','450'),(188,8,'20','Premium','Booked','450'),(189,8,'21','Premium','Available','450'),(190,8,'22','Premium','Booked','450'),(191,8,'23','Premium','Available','450'),(192,8,'24','Premium','Booked','450'),(193,9,'1','Economy','Available','100'),(194,9,'2','Economy','Booked','100'),(195,9,'3','Economy','Available','100'),(196,9,'4','Economy','Booked','100'),(197,9,'5','Economy','Available','100'),(198,9,'6','Economy','Booked','100'),(199,9,'7','Economy','Available','100'),(200,9,'8','Economy','Booked','100'),(201,9,'9','Economy','Available','100'),(202,9,'10','Economy','Booked','100'),(203,9,'11','Economy','Available','100'),(204,9,'12','Economy','Booked','100'),(205,9,'13','Premium','Available','450'),(206,9,'14','Premium','Booked','450'),(207,9,'15','Premium','Available','450'),(208,9,'16','Premium','Booked','450'),(209,9,'17','Premium','Available','450'),(210,9,'18','Premium','Booked','450'),(211,9,'19','Premium','Available','450'),(212,9,'20','Premium','Booked','450'),(213,9,'21','Premium','Available','450'),(214,9,'22','Premium','Booked','450'),(215,9,'23','Premium','Available','450'),(216,9,'24','Premium','Booked','450'),(217,10,'1','Economy','Available','100'),(218,10,'2','Economy','Booked','100'),(219,10,'3','Economy','Available','100'),(220,10,'4','Economy','Booked','100'),(221,10,'5','Economy','Available','100'),(222,10,'6','Economy','Booked','100'),(223,10,'7','Economy','Available','100'),(224,10,'8','Economy','Booked','100'),(225,10,'9','Economy','Booked','100'),(226,10,'10','Economy','Booked','100'),(227,10,'11','Economy','Available','100'),(228,10,'12','Economy','Booked','100'),(229,10,'13','Premium','Available','450'),(230,10,'14','Premium','Booked','450'),(231,10,'15','Premium','Available','450'),(232,10,'16','Premium','Booked','450'),(233,10,'17','Premium','Booked','450'),(234,10,'18','Premium','Booked','450'),(235,10,'19','Premium','Available','450'),(236,10,'20','Premium','Booked','450'),(237,10,'21','Premium','Available','450'),(238,10,'22','Premium','Booked','450'),(239,10,'23','Premium','Available','450'),(240,10,'24','Premium','Booked','450'),(241,11,'1','Economy','Available','100'),(242,11,'2','Economy','Booked','100'),(243,11,'3','Economy','Available','100'),(244,11,'4','Economy','Booked','100'),(245,11,'5','Economy','Available','100'),(246,11,'6','Economy','Booked','100'),(247,11,'7','Economy','Available','100'),(248,11,'8','Economy','Booked','100'),(249,11,'9','Economy','Available','100'),(250,11,'10','Economy','Booked','100'),(251,11,'11','Economy','Available','100'),(252,11,'12','Economy','Booked','100'),(253,11,'13','Premium','Available','450'),(254,11,'14','Premium','Booked','450'),(255,11,'15','Premium','Available','450'),(256,11,'16','Premium','Booked','450'),(257,11,'17','Premium','Available','450'),(258,11,'18','Premium','Booked','450'),(259,11,'19','Premium','Available','450'),(260,11,'20','Premium','Booked','450'),(261,11,'21','Premium','Available','450'),(262,11,'22','Premium','Booked','450'),(263,11,'23','Premium','Available','450'),(264,11,'24','Premium','Booked','450'),(265,12,'1','Economy','Booked','100'),(266,12,'2','Economy','Booked','100'),(267,12,'3','Economy','Booked','100'),(268,12,'4','Economy','Booked','100'),(269,12,'5','Economy','Booked','100'),(270,12,'6','Economy','Booked','100'),(271,12,'7','Economy','Booked','100'),(272,12,'8','Economy','Booked','100'),(273,12,'9','Economy','Booked','100'),(274,12,'10','Economy','Booked','100'),(275,12,'11','Economy','Booked','100'),(276,12,'12','Economy','Booked','100'),(277,12,'13','Premium','Available','450'),(278,12,'14','Premium','Booked','450'),(279,12,'15','Premium','Booked','450'),(280,12,'16','Premium','Booked','450'),(281,12,'17','Premium','Available','450'),(282,12,'18','Premium','Booked','450'),(283,12,'19','Premium','Available','450'),(284,12,'20','Premium','Booked','450'),(285,12,'21','Premium','Available','450'),(286,12,'22','Premium','Booked','450'),(287,12,'23','Premium','Available','450'),(288,12,'24','Premium','Booked','450'),(289,16,'1','Economy','Available','100'),(290,16,'2','Economy','Booked','100'),(291,16,'3','Economy','Available','100'),(292,16,'4','Economy','Booked','100'),(293,16,'5','Economy','Available','100'),(294,16,'6','Economy','Booked','100'),(295,16,'7','Economy','Available','100'),(296,16,'8','Economy','Booked','100'),(297,16,'9','Economy','Available','100'),(298,16,'10','Economy','Booked','100'),(299,16,'11','Economy','Booked','100'),(300,16,'12','Economy','Booked','100'),(301,16,'13','Premium','Available','450'),(302,16,'14','Premium','Booked','450'),(303,16,'15','Premium','Available','450'),(304,16,'16','Premium','Booked','450'),(305,16,'17','Premium','Available','450'),(306,16,'18','Premium','Booked','450'),(307,16,'19','Premium','Available','450'),(308,16,'20','Premium','Booked','450'),(309,16,'21','Premium','Available','450'),(310,16,'22','Premium','Booked','450'),(311,16,'23','Premium','Available','450'),(312,16,'24','Premium','Booked','450'),(313,17,'1','Economy','Available','100'),(314,17,'2','Economy','Booked','100'),(315,17,'3','Economy','Available','100'),(316,17,'4','Economy','Booked','100'),(317,17,'5','Economy','Available','100'),(318,17,'6','Economy','Booked','100'),(319,17,'7','Economy','Available','100'),(320,17,'8','Economy','Booked','100'),(321,17,'9','Economy','Available','100'),(322,17,'10','Economy','Booked','100'),(323,17,'11','Economy','Available','100'),(324,17,'12','Economy','Booked','100'),(325,17,'13','Premium','Available','450'),(326,17,'14','Premium','Booked','450'),(327,17,'15','Premium','Available','450'),(328,17,'16','Premium','Booked','450'),(329,17,'17','Premium','Available','450'),(330,17,'18','Premium','Booked','450'),(331,17,'19','Premium','Available','450'),(332,17,'20','Premium','Booked','450'),(333,17,'21','Premium','Available','450'),(334,17,'22','Premium','Booked','450'),(335,17,'23','Premium','Available','450'),(336,17,'24','Premium','Booked','450');
/*!40000 ALTER TABLE `seats` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-15 20:10:41
