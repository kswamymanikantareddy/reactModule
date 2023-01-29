import InputField from "./Input";

const CheckBoxComponent = {
  title : 'InputField',
    component : 'InputField',
    argTypes: { onClick: { action: 'clicked' } },
}

const Template =args=><InputField {...args}/>
export const Default = Template.bind({});
Default.args={
    maxLength : 10,
    placeholder : 'Enter your text',
   
}

export default CheckBoxComponent;
