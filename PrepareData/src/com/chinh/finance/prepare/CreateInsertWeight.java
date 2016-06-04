package com.chinh.finance.prepare;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class CreateInsertWeight {

   public static final short PERIOD = 5;
   public static final String FOREX_NAME = "EURUSD";
   public static final short LAYER = 2;
   public static final short NUM_NEURON_FROM = 8;
   public static final short NUM_NEURON_TO = 1;
   public static final String OUTPUT_FILE_NAME = "WEIGHT_" + FOREX_NAME + "_" + PERIOD + ".txt";
   
   public static final String SQL_INSERT = "insert into NNWeight (forex_name, period, layer, neuron_to, "
         + "neuron_from, weight) values ('%s', %d, %d, %d, %d, 0);";
   
   public static void main(String[] args) {
      System.out.println("Create weight insert into database");
      try {
         File file = new File(OUTPUT_FILE_NAME);
         if (file.exists() == false) {
            file.createNewFile();
         }
         FileWriter fw = new FileWriter(file);
         BufferedWriter bw = new BufferedWriter(fw);
         String result;
         for (int i = 0; i < NUM_NEURON_TO; i++) {
            for (int j = 0; j < NUM_NEURON_FROM; j++) {
               result = String.format(SQL_INSERT, FOREX_NAME, PERIOD, LAYER, i, j);
               result = result + "\n";
               bw.write(result);
            }
         }
         bw.close();
      } catch (IOException e) {
         e.printStackTrace();
      }
   }

}
