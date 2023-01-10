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

export const MyLabel = ({
   label = 'No Label',
   size = 'nomal',
   allCaps = false,
   color = 'primary',
   fontColor = '',
   backgroundColor = 'transparent'
}: MyLabelProps) => {

   return (
      <span
         className={` label ${size} text-${color}`}
         style={{ color: fontColor, backgroundColor }}
      >
         {allCaps ? label.toUpperCase() : label}
      </span>
   )

}
