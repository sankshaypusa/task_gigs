import { ICertificate, ISellerDocument } from './interfaces/interfaces/seller.interface';
import { winstonLogger } from './logger';
export {IAuthPayload,IAuth,
    IAuthBuyerMessageDetails,
    IEmailMessageDetails,
    ISignUpPayload,
    ISignInPayload, 
    IForgotPassword, 
    IResetPassword, 
    IReduxAuthPayload,
    IReduxAddAuthUser,
    IReduxLogout,
    IAuthResponse,
    IAuthUser,} from './interfaces/interfaces/auth.interface';

    export {IBuyerDocument, IReduxBuyer } from './interfaces/interfaces/buyer.interface';
    export {
    IConversationDocument, 
    IMessageDocument, 
    IMessageDetails, 
    IChatBoxProps,
    IChatSellerProps,
    IChatBuyerProps,
    IChatMessageProps,
    } from './interfaces/interfaces/chat.interface';

    export
    {
    IGigViewReviewsProps,
    GigType,
    ICreateGig,
    ISellerGig,
    IGigContext,
    IGigsProps,
    IGigCardItems,
    ISelectedBudget,
    IGigInfo,
    IGigTopProps,
    } from './interfaces/interfaces/gig.interface';
    
    export {
   IOrderNotifcation,
   IOffer,
   IExtendedDelivery,
   IDeliveredWork, 
   IOrderEvents, 
   IOrderReview,
   IOrderMessage, 
   IOrderDocument,
     } from './interfaces/interfaces/order.interface';

     export
     {
     IReviewMessageDetails, 
     IRatingTypes, 
     IRatingCategories, 
     IRatingCategoryItem, 
     IReviewDocument,
     }from './interfaces/interfaces/review.interface';

     export
     {
        ISearchResult, 
        IHitsTotal,
        IQueryList, 
        IQueryString, 
        ITerm, 
        IPaginateProps,
        } from './interfaces/interfaces/search.interface';
       
        export 
        {
         SellerType, 
         ILanguage, 
         IExperience, 
         IEducation,
         ICertificate,
         ISellerDocument
        } from './interfaces/interfaces/seller.interface';

    export { IEmailLocals } from  './interfaces/interfaces/email.interface';

    export {uploads, videoUpload} from './cloudinary-upload';

    export {
    IErrorResponse, 
    IError,
    CustomError,
    BadRequestError,
     NotFoundError, 
     NotAuthorizedError, 
     FileTooLargeError,
     ServerError, 
     ErrnoException
     } from './error-handler';

     export {verifyGatewayRequest} from  './gateway-middleware';

     export{winstonLogger} from './logger';

     export {
        firstLetterUppercase,
        lowerCase,
        toUpperCase,
        isEmail,
        isDataURL

     } from './helpers';