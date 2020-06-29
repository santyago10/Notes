import { Column, Entity,  PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Note {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public info: string;
}

export default Note;
