import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faBoxesStacked, faUser, faFileInvoiceDollar, faCartShopping, faRightFromBracket} from "@fortawesome/free-solid-svg-icons"



// Route
export const adminRoute=[
    {
      text: "Dashboard",
      route: "/admin",
      icon: faChartSimple
    },
    {
      text: "Sản phẩm",
      route: "/admin/products",
      icon: faBoxesStacked
    },
    {
      text: "Tài khoản",
      route: "/admin/users",
      icon: faUser
    },
    {
      text: "Đơn hàng",
      route: "/admin/invoices",
      icon: faFileInvoiceDollar
    },
    {
      text: "Đặt hàng",
      route: "/admin/orders",
      icon: faCartShopping
    },
    
  ]