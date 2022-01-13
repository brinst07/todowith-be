import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import { OnDeleteOptions } from 'src/common/constants';
import { File } from 'src/files/models/file.model';

@Table
export class Notice extends Model {
  @AllowNull(false)
  @Column
  title: string;

  @Column({ type: DataType.TEXT })
  content: string;

  @ForeignKey(() => File)
  @Column
  fileId: number;

  @BelongsTo(() => File, { onDelete: OnDeleteOptions.SET_NULL })
  file: File;
}
