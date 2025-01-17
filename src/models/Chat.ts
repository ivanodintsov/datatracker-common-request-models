import { Exclude, Expose, Type } from 'class-transformer';
import { Message } from './Message';
import ChatPhoto from './ChatPhoto';

@Exclude()
export class Chat {
  @Expose()
  @Type(() => Number)
  id: number;

  @Expose()
  @Type(() => String)
  type: string;

  @Expose()
  @Type(() => String)
  title: string;

  @Expose()
  @Type(() => String)
  username: string;

  @Expose()
  @Type(() => String)
  first_name: string;

  @Expose()
  @Type(() => String)
  last_name: string;

  @Expose()
  @Type(() => Boolean)
  all_members_are_administrators: boolean;

  @Expose()
  @Type(() => String)
  description: string;

  @Expose()
  @Type(() => String)
  invite_link: string;

  // @Expose()
  // @Type(() => Message)
  // pinned_message: Message;

  @Expose()
  @Type(() => String)
  sticker_set_name: string;

  @Expose()
  @Type(() => Boolean)
  can_set_sticker_set: boolean;

  @Expose()
  @Type(() => Number)
  members_count: number;

  @Expose()
  @Type(() => ChatPhoto)
  photo: ChatPhoto;

  @Expose()
  @Type(() => Date) 
  cron_updated_at: Date;
}

export default Chat;
