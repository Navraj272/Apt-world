'use strict'

module.exports = {
  async up (queryInterface, DataTypes) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('multi_language_support', {
        multi_language_support_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        language: {
          type: DataTypes.STRING,
          allowNull: false
        },
        casino_banner_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        casino_banner_join_now: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        casino_banner_tnc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        casino_favorite: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        casino_no_fav_games_found: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        casino_no_games_found: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        casino_game_view_all_btn: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        casino_search: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        casino_more_games: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        casino_providers: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        home_about: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        footer_about_site: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        footer_rights_reserved: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        footer_category: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        footer_support: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        footer_other: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        footer_image_one: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        footer_image_two: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        footer_image_three: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        prom_banner_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        prom_claim_now: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        prom_read_more: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        prom_freespin_games: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        prom_terms_and_conditions: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        home_banner_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        home_banner_join_now: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        home_banner_tnc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        home_real_player_sec: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        home_current_winners: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        home_top_winners: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        home_top_games: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        home_testimonial: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_home: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_promotions: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_loyalty: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_search: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_real_money: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_casino_bonus: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_level: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_deposit: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_acc_and_info: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_acc_verify: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_bonus: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_limits: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_deposit_funds: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_withdraw_funds: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_transaction_history: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_bet_history: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_logout: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_select_your_lang: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        home_about_content: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        loyalty_banner_btn: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        loyalty_banner_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        loyalty_testimonial_head_one: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        loyalty_testimonial_head_two: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        loyalty_points: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        loyalty_cashback: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        login_key: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        login_to_your_account: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        login_username: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        login_email: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        login_enter: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        login_your: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        login_password: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        login_forget: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        login_do_not_have_account: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        login_sign_up: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_get_an_amazing: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_banner_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_start_with_email: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_login_details: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_email_address: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_user_name: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_confirm: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_privacy_policy: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_term_and_conditions: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_news_letter: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_sms: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_next_step: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_have_account: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_sign_in: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_personal_details: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_first_name: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_dob: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_address: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_phone_no: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_city: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_postcode: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_county: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_currency: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_gender: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_man: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_women: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_other: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_back: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_create_an_account: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        signup_last_name: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_banner_btn: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_banner_heading: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        cashback_banner_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_heading_one: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_heading_one_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_heading_two: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_heading_two_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_heading_three: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_heading_three_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_heading_four: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_heading_four_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_testimonial_heading: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_testimonial_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_table_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_table_heading: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_footer_desc: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        header_cashback: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_table_header_one: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_table_header_two: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_table_header_three: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        cashback_table_header_four: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_banner_heading: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_heading_one: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_heading_one_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_one: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_one_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_two: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_two_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_three: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_three_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_table_heading: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_table_header_one: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_table_header_two: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_table_header_three: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_table_header_four: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_table_header_five: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_table_header_six: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_table_header_seven: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_table_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_heading_two: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_heading_two_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_heading_three: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_heading_three_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_four: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_four_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_five: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_five_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_six: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_six_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_seven: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_seven_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_eight: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_eight_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_nine: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_nine_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_ten: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_ten_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_eleven: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_sub_head_eleven_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_testimonial_desc: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_heading_four: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        loyalty_level: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        created_at: {
          allowNull: false,
          type: DataTypes.DATE
        },
        sidebar_cms_one: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        sidebar_cms_two: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        complete_payment: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        kyc_protocol_details: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        bonus_forfeited: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        bonus_zeroed_out: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        bonus_expired: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        bonus_balance_done: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        completed_wagering: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        login_home_banner_btn: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        login_prom_banner_btn: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        login_loyalty_banner_btn: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        login_cashback_banner_btn: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        accounts_info_first_tab: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        accounts_info_fourth_tab: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        updated_at: {
          allowNull: false,
          type: DataTypes.DATE
        }
      }, {
        schema: 'public',
        transaction
      })

      await queryInterface.addIndex('public.multi_language_support', ['language'], {
        name: 'index_multi_language_support_on_language', transaction
      })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.dropTable('multi_language_support', { schema: 'public' })
  }
}
