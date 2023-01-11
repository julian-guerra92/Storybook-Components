/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * This is the text of the label when create de component
    */
    label: string;
    /**
    * This is the size options for the label
    */
    size: 'nomal' | 'h1' | 'h2' | 'h3';
    /**
    * If you want, this option capitalize all the word
    */
    allCaps?: boolean;
    /**
    * This option allows you to select the color of the label
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * With this option you can select the color of the label that you prefer
    */
    fontColor?: string;
    /**
    * With this option you can select the background color of the label that you prefer
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
