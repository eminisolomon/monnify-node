export interface ICreateAccountRequest {
                    accountName: string;
                    currencyCode?: string;
                    contractCode?: number;
                    customerEmail: string;
                    customerName: string;
                    customerBvn?: string;
                    getAllAvailableBanks?: boolean;
                    preferredBanks?: string[];
}