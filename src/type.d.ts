export interface PageInfo {
    title: string;
    content: string;
}
export interface PagesList{
    [id: string]: PageInfo;
}