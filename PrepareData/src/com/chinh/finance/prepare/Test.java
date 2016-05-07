package com.chinh.finance.prepare;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Test {

   public static final String DATA_TIME = "TIME";
   public static final String DATA_EMA = "EMA";
   public static final String DATA_OPEN = "OPEN";
   public static final String DATA_CLOSE = "CLOSE";
   public static final String DATA_HIGH = "HIGH";
   public static final String DATA_LOW = "LOW";
   
   //these constant variables should be set before running
   public static final String FILE_NAME = "EUR_USD_5m.txt";
   public static final String FOREX_NAME = "EURUSD";
   public static final short PERIOD = 5;
   public static final String OUTPUT_FILE_NAME = "O_" + FOREX_NAME + "_" + PERIOD + ".txt";
   
   //these constant variables for create sql
   public static final String SQL_INSERT = "insert into ForexData (forex_name, "
         + "period, year, month, day, hour, minute, ma, open, close, high, low) "
         + "values ('%s', %d, %d, %d, %d, %d, %d, %1.5f, %1.5f, %1.5f, %1.5f, %1.5f);";
   
   public static void main(String[] args) {
      System.out.println("Prepare Data");
      BufferedReader br = null;
      try {
         br = new BufferedReader(new FileReader(FILE_NAME));
         String curLine = null;
         String dataTime;
         int year, month, day, hour, minute;
         float ma;
         float open, close, high, low;
         String result;
         //for output file
         File file = new File(OUTPUT_FILE_NAME);
         if (file.exists() == false) {
            file.createNewFile();
         }
         FileWriter fw = new FileWriter(file);
         BufferedWriter bw = new BufferedWriter(fw);
         do {
            curLine = br.readLine();
            if (curLine == null) break;
            if (curLine.startsWith(DATA_TIME)) {
               dataTime = curLine.substring(DATA_TIME.length() + 1);
               year = Integer.parseInt(dataTime.substring(0, 4));
               month = Integer.parseInt(dataTime.substring(5, 7));
               day = Integer.parseInt(dataTime.substring(8, 10));
               hour = Integer.parseInt(dataTime.substring(11, 13));
               minute = Integer.parseInt(dataTime.substring(14, 16));
               //System.out.println(year + "," + month + "," + day + "," + hour + "," + minute);
               curLine = br.readLine();
               if (curLine.startsWith(DATA_EMA)) {
                  ma = Float.parseFloat(curLine.substring(DATA_EMA.length() + 1));
                  //System.out.println(ma);
                  curLine = br.readLine();
                  if (curLine.startsWith(DATA_OPEN)) {
                     open = Float.parseFloat(curLine.substring(DATA_OPEN.length() + 1));
                     //System.out.println(open);
                     curLine = br.readLine();
                     if (curLine.startsWith(DATA_CLOSE)) {
                        close = Float.parseFloat(curLine.substring(DATA_CLOSE.length() + 1));
                        //System.out.println(close);
                        curLine = br.readLine();
                        if (curLine.startsWith(DATA_HIGH)) {
                           high = Float.parseFloat(curLine.substring(DATA_HIGH.length() + 1));
                           //System.out.println(high);
                           curLine = br.readLine();
                           if (curLine.startsWith(DATA_LOW)) {
                              low = Float.parseFloat(curLine.substring(DATA_LOW.length() + 1));
                              //System.out.println(low);
                           } else {
                              break;
                           }
                        } else {
                           break;
                        }
                     } else {
                        break;
                     }
                  } else {
                     break;
                  }
               } else {
                  break;
               }
               //now create sql statement
               result = String.format(SQL_INSERT, FOREX_NAME, PERIOD, year, month, day, 
                     hour, minute, ma, open, close, high, low);
               System.out.println(result);
               result = result + "\n";
               bw.write(result);
            }
         } while (curLine != null);
         bw.close();
      } catch (FileNotFoundException e) {         
         e.printStackTrace();
      } catch (IOException e) {
         e.printStackTrace();
      } finally {
         if (br != null) {
            try {
               br.close();
            } catch (IOException e) {
               e.printStackTrace();
            }
         }
      }
   }
}
