# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: dohyulee <dohyulee@student.42.fr>          +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2021/09/30 17:29:48 by dohyulee          #+#    #+#              #
#    Updated: 2021/09/30 17:45:11 by dohyulee         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

NAME = do-op

SRCS = ./do_op.c ./ft_atoi.c ./ft_putnbr.c ./main.c ./ft_strcmp.c
OBJS = ./do_op.o ./ft_atoi.o ./ft_putnbr.o ./main.o ./ft_strcmp.o
DIRH = ./includes

all : $(NAME)

$(NAME) :
	gcc -Wall -Werror -Wextra -c -I$(DIRH) $(SRCS)
	gcc $(OBJS) -o $(NAME)

clean:
	rm -f $(OBJS)

fclean : clean
	rm -f $(NAME)

re : fclean all
