export interface FormItem {
    id: number,
    type: string,
    placeholder: string;
    width: string,
    height: string,
    value: string,
    required: boolean,
    border: {
        style: string,
        width: string,
        color: string
    },
    fontSize: string,
    fontWeight: string
    color: string
} 