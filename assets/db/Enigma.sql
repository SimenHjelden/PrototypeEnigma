SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `Enigma` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `Enigma` ;

-- -----------------------------------------------------
-- Table `Enigma`.`PROFILE`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `Enigma`.`PROFILE` (
  `Id` INT NOT NULL AUTO_INCREMENT ,
  `Brukernavn` VARCHAR(45) NOT NULL ,
  `Epost` VARCHAR(100) NOT NULL ,
  `Passord` VARCHAR(12) NOT NULL ,
  PRIMARY KEY (`Id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Enigma`.`TEAM`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `Enigma`.`TEAM` (
  `Id` INT NOT NULL AUTO_INCREMENT ,
  `Lagnavn` VARCHAR(45) NOT NULL ,
  `Passord` VARCHAR(12) NOT NULL ,
  `PROFILE_Id` INT NOT NULL ,
  PRIMARY KEY (`Id`) ,
  INDEX `fk_TEAM_PROFILE_idx` (`PROFILE_Id` ASC) ,
  CONSTRAINT `fk_TEAM_PROFILE`
    FOREIGN KEY (`PROFILE_Id` )
    REFERENCES `Enigma`.`PROFILE` (`Id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Enigma`.`REBUS`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `Enigma`.`REBUS` (
  `Id` INT NOT NULL AUTO_INCREMENT ,
  `Rebusnavn` VARCHAR(45) NOT NULL ,
  `Beskrivelse` VARCHAR(500) NULL ,
  `Passord` VARCHAR(12) NOT NULL ,
  `MaksLag` INT NULL ,
  `TidFra` DATETIME NOT NULL ,
  `TidTil` DATETIME NOT NULL ,
  `TEAM_Id` INT NOT NULL ,
  PRIMARY KEY (`Id`) ,
  INDEX `fk_REBUS_TEAM1_idx` (`TEAM_Id` ASC) ,
  CONSTRAINT `fk_REBUS_TEAM1`
    FOREIGN KEY (`TEAM_Id` )
    REFERENCES `Enigma`.`TEAM` (`Id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Enigma`.`POST`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `Enigma`.`POST` (
  `Id` INT NOT NULL AUTO_INCREMENT ,
  `PostTittel` VARCHAR(45) NOT NULL ,
  `lang` FLOAT(6) NOT NULL ,
  `long` FLOAT(6) NOT NULL ,
  `PostType` ENUM('spm', 'mulitple') NOT NULL ,
  `REBUS_Id` INT NOT NULL ,
  PRIMARY KEY (`Id`) ,
  INDEX `fk_POST_REBUS1_idx` (`REBUS_Id` ASC) ,
  CONSTRAINT `fk_POST_REBUS1`
    FOREIGN KEY (`REBUS_Id` )
    REFERENCES `Enigma`.`REBUS` (`Id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
