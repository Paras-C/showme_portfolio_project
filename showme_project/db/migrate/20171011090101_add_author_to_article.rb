class AddAuthorToArticle < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :author, :text
  end
end
