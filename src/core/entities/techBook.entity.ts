export interface TechBookSearchParams {
  q: string;
}
export interface TechBookEntity {
  l_check: string;
  l_title: string;
  l_sotitle: string;
  l_author: string;
  l_soauthor: string;
  l_publisher: string;
  l_sopublisher: string;
  l_callno: string;
  l_socallno: string;
  l_calltype: string;
  l_year: string;
  l_language: string;
  l_record_type: string;
  l_maintitle: string;
  l_contain: string;
  l_security: string;
  l_abstract: string;
  /**
   * id
   */
  l_mast_id: string;
  l_isbn: string;
  l_country: string;
  l_indate: string;
  l_reserve_v: string;
  l_reserve_i: string;
  l_record_link: string;
  l_record_hold: string;
}
