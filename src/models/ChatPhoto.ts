import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class ChatPhoto {
  @Expose()
  @Type(() => String)
  small_file_id: string;

  @Expose()
  @Type(() => String)
  big_file_id: string;
  
  @Expose()
  @Type(() => String)
  small_file: string;

  @Expose()
  @Type(() => String)
  big_file: string;
}

export default ChatPhoto;
