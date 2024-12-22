import * as winston from 'winston';
import 'winston-daily-rotate-file';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const logDir = join(__dirname, '../../logs');

/**
 * Formato personalizado para la visualización de los logs
 *
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

/**
 * Configuración de archivos de logs
 *
 * @Author Cristian David Herrera
 * @date 2024-12-21
 */
const files = new winston.transports.DailyRotateFile({
  filename: join(logDir, '%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  format: winston.format.combine(winston.format.timestamp(), customFormat)
});

/**
 * Objeto de configuración de logger de la libreria winston
 * con la finalidad de tener un registro de los errores de la aplicación
 *
 * @Author Cristian David Herrera
 * @date 2024-12-21
 */
export const logger = winston.createLogger({
  level: 'info',
  transports: [
    files,
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple())
    })
  ]
});
