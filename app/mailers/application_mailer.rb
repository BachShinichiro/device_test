class ApplicationMailer < ActionMailer::Base
  default from: 'kitchen.number@gmail.com'
  def alert()
    mail(subject: "失敗しました")
  end
  layout 'mailer'
end
